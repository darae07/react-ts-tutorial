import { useEffect, useState} from 'react';
import styles from './chart.module.css';
import {getBillboardChart, dataSnipet} from 'controllers/chart';

export function Chart(){
  const [contents, setContents] = useState(dataSnipet);

  useEffect(()=>{
    getBillboardChart().then(data=>{
      setContents(data.content);
    })
  }, []);

  return (
    <div className={styles.chart}>
      <h2>멜론 차트</h2>
    </div>
  )
}