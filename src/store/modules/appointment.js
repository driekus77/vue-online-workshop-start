import Vue from 'vue';

//import { normalizeRelations, resolveRelations } from '../helpers';
import appointmentService from '../../services/appointment';
import moment from 'moment';

const state = {
  selectedDate: 0,

  byId: {},
  allIds: [],
};

const getters = {
    getSelectedDate: state => moment(state.selectedDate),

    find: state => id => state.byId[id],
    list: (state, getters) => {
      return state.allIds.map(id => getters.find(id));
    },
    listByMoment: (state, getters) => m => {
      return getters.list.filter(appObj => m.isSame(appObj.date, "day"));
    },
    countImportantAppointmentsByMoment: (state, getters) => (m) => {
      return getters.listByMoment(m).filter(appObj => appObj.important === true).length;
    }
};

const actions = {
  setSelectedDate: async ({ commit }, payload) => {
    commit('setSelectedDate', payload.valueOf());
  },

  load: async ({ commit }) => {
    const appointments = await appointmentService.list();
    appointments.forEach((item) => {
      commit('add', item);
    });
  },
  set: async ({ commit }, payload) => {
    commit('add', payload);
  }
};

const mutations = {
  setSelectedDate: (state, payload) => {
    state.selectedDate = payload;
  },

  add: (state, payload) => {
    Vue.set(state.byId, payload.id, payload);
    if (state.allIds.includes(payload.id)) return;
    state.allIds.push(payload.id);
  }
};

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};

