import { useEffect, useState} from 'react';
import styles from './chart.module.css';
import {getBillboardChart, dataSnipet} from 'controllers/chart';

interface content {
  artist: string,
  detail: string,
  'last week': string,
  'peak position': string,
  rank: string,
  title: string,
  'weeks at no.1': string,
  'weeks on chart': string,
  hover? : boolean,
}
export function Chart() {
  const [contents, setContents] = useState<content[]>(dataSnipet.content);
  const [tab, setTab] = useState('pop');
  const [chartDay, setChartDay] = useState('');

  useEffect(()=>{
    getBillboardChart({page: 1}).then(data=>{
      setContents(Object.values(data.content));
      const day = localStorage.getItem('chartDay');
      setChartDay(day);
    })
  }, []);

  const toggleTab = (t: string): void => {
    setTab(t);
  };

  useEffect(()=>{
    const hoverEle = contents.find(c=>c.hover);
    if(!hoverEle){
      setContents(contents.map((c, i)=>{
        if(i===0) return {...c, hover: true};
        return c
      }))
    }
  }, [contents]);

  const onHover = (i) =>{
    setContents(contents.map((c, inx)=>{
      if(i===inx) return {...c, hover: true}
      return {...c, hover: false}
    }))
  }


  return (
    <div className={styles.chart}>
      <h2>멜론 차트</h2>
      <span className={styles.chart_day}>{chartDay} 기준</span>
      <ul className={styles.tab}>
        <li className={`${styles.tab_item} ${tab === '24hits' && styles.active}`}
          onClick={() => toggleTab('24hits')}>
          <span>24Hits</span>
        </li>
        <li className={`${styles.tab_item} ${tab === 'pop' && styles.active}`}
          onClick={() => toggleTab('pop')}>
          <span>POP</span>
        </li>
        <li className={`${styles.tab_item} ${tab === 'artist' && styles.active}`}
          onClick={() => toggleTab('artist')}>
          <span>아티스트</span>
        </li>
      </ul>
      <div>
        {tab === 'pop' && <ul className={styles.chart_list}>
          {contents.map((cont, i) => (
            <li className={cont.hover ? styles.on : ''}
              onMouseEnter={() => onHover(i)} key={i}>
              <div className={styles.img_snipet}></div>
              <div>
                <span className={styles.title}>{cont.title}</span>
                <span className={styles.artist}>{cont.artist}</span>
              </div>
            </li>))}
        </ul>}
      </div>
    </div>
  )
}