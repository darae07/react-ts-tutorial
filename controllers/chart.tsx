import axios from "axios";
import { setDate, setDay } from "date-fns";

const formatter = (int) => {
  return int > 9 ? int : '0'+int;
}
const today = (subtractDay) => {
  const d = new Date();
  if(subtractDay){
    d.setDate(d.getDate() + subtractDay);
  }
  const y = d.getFullYear();
  const m = d.getMonth()+1;
  const dd = d.getDate();
  const hour = d.getHours();
  localStorage.setItem('chartDay', `${y}-${formatter(m)}-${formatter(dd)}`)
  return `${y}-${formatter(m)}-${formatter(dd)}`
}
const optionsGenerator = (subtractDay, page) => {
  const range = `${(page-1)*10 +1}-${(page)*10}`
  return {
    url: 'https://billboard-api2.p.rapidapi.com/hot-100',
    params: {date: today(subtractDay), range: range},
    headers: {
      'x-rapidapi-key': '1d216a6414msh210933d608d4962p1bc50bjsnb8622dbadd16',
      'x-rapidapi-host': 'billboard-api2.p.rapidapi.com'
    }
  };
}

interface config{
  page: number,
}

export function getBillboardChart(config:config) {
  let subtractDay = 0
  const getChart = () => {
    return axios.get('https://billboard-api2.p.rapidapi.com/hot-100', optionsGenerator(subtractDay, config.page))
      .then(res => res.data)
      .catch(error => {
        subtractDay --;
        console.error(error);
        if(subtractDay > -5){
          getChart();
        }
      });
  }
  return getChart();
}

export const dataSnipet = {
  content: [
    {
      artist: "Olivia Rodrigo",
      detail: "new",
      'last week': "None",
      'peak position': "1",
      rank: "1",
      title: "Good 4 U",
      'weeks at no.1': "1",
      'weeks on chart': "1",
    },
    {
      artist: "Olivia Rodrigo",
      detail: "new",
      'last week': "None",
      'peak position': "1",
      rank: "1",
      title: "Good 4 U",
      'weeks at no.1': "1",
      'weeks on chart': "1",
    },
    {
      artist: "Olivia Rodrigo",
      detail: "new",
      'last week': "None",
      'peak position': "1",
      rank: "1",
      title: "Good 4 U",
      'weeks at no.1': "1",
      'weeks on chart': "1",
    }
  ]
}