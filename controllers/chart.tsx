import axios from "axios";

const formatter = (int) => {
  return int > 9 ? int : '0'+int;
}
const today = (yesterday) => {
  const d = new Date();
  const y = d.getFullYear();
  const m = d.getMonth()+1;
  const dd = d.getDate();
  const hour = d.getHours();
  if(yesterday){
    localStorage.setItem('chartDay', `${y}-${formatter(m)}-${formatter(dd-1)}`)
    return `${y}-${formatter(m)}-${formatter(dd-1)}`
  }
  localStorage.setItem('chartDay', `${y}-${formatter(m)}-${formatter(dd)}`)
  return `${y}-${formatter(m)}-${formatter(dd)}`
}
const optionsGenerator = (yesterday, page) => {
  const range = `${(page-1)*10 +1}-${(page)*10}`
  return {
    url: 'https://billboard-api2.p.rapidapi.com/hot-100',
    params: {date: today(yesterday), range: range},
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
  return axios.get('https://billboard-api2.p.rapidapi.com/hot-100', optionsGenerator(false, config.page))
  .then(res=>res.data)
    .catch(function (error) {
      console.error(error);
      return axios.get('https://billboard-api2.p.rapidapi.com/hot-100', optionsGenerator(true, config.page))
        .then(res => res.data)
        .catch(error => {
          console.error(error);
        })
    });
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