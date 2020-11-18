import Menu from '../components/Menu';
import Agenda from '../components/Agenda';
import AppointmentsOverview from '../components/AppointmentsOverview';

// Routing
export default [
  { path: '/', components: { top: Menu, default: Agenda }},

  { path: '/agenda', components: { top: Menu, default: Agenda }},
  { path: '/agenda/:seldate', components: { top: Menu, default: Agenda }},

  { path: '/appointments', components: { top: Menu, default: AppointmentsOverview }},
];
