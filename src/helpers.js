import moment from "moment";

export function getItemsPerMonth(year, month) {
  var n = getIsoWeekDaysInMonth(year, month);

  var arr = Array.from(
    {
      length: n
    },
    (x, i) =>
      moment(year + "-" + month + "-01", "YYYY-MM-DD")
        .startOf("isoWeek")
        .add(i, "days")
  );

  const reqMonthId = moment(year + "-" + month + "-01", "YYYY-MM-DD").monthId();
  return arr.map(x => {
    return {
      date: x,
      labelCount: 0,
      isInReqMonth: reqMonthId === x.monthId()
    };
  });
}

export function getFullMonthName(month) {
  return moment("2020-" + month + "-01", "YYYY-MM-DD").format("MMMM");
}

export function getIsoWeekDaysInMonth(year, month) {
  var momentObj = moment(year + "-" + month + "-01", "YYYY-MM-DD");

  var mFirstIsoWeekDayOfMonth = momentObj
    .clone()
    .startOf("month")
    .startOf("isoWeek");
  var mLastIsoWeekDayOfMonth = momentObj
    .clone()
    .endOf("month")
    .endOf("isoWeek");

  var d = moment.duration(mLastIsoWeekDayOfMonth.diff(mFirstIsoWeekDayOfMonth));

  return d.asDays() + 1;
}

export function getAppointments() {
  return [
    {
      id: 1,
      date: new Date("2020-03-12 18:00"),
      description: "Tech Event Dinner!",
      important: true
    },
    {
      id: 2,
      date: new Date("2020-03-12 19:00"),
      description: "Workshops Session I",
      important: false
    },
    {
      id: 3,
      date: new Date("2020-03-12 20:00"),
      description: "Workshops Session II",
      important: false
    },
    {
      id: 4,
      date: new Date("2020-11-19 19:00"),
      description: "Workshop Vue.js (Via MS Teams)",
      important: true
    },
    {
      id: 5,
      date: new Date("2020-11-19 21:00"),
      description: "After Workshop Party (Via MS Teams)",
      important: false
    },
    {
      id: 6,
      date: new Date("2020-12-05 19:00"),
      description: "Verjaardag Sinterklaas!",
      important: false
    },    
    {
      id: 7,
      date: new Date("2020-12-09 19:00"),
      description: "Workshop C#",
      important: false
    },

    {
      id: 10,
      date: new Date("2020-10-30 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 11,
      date: new Date("2020-11-06 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 12,
      date: new Date("2020-11-13 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 13,
      date: new Date("2020-11-20 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 14,
      date: new Date("2020-11-27 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },        
    {
      id: 15,
      date: new Date("2020-12-04 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },        
  ];
}

moment.prototype.monthId = function() {
  return Number(this.format("YYYYMM"));
};
