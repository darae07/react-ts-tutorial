import { useEffect } from 'react';
import styles from './chart.module.css';
import {getBillboardChart} from 'controllers/chart';

export function Chart(){
  useEffect(()=>{
    // getBillboardChart()
  }, [])
  return (
    <div className={styles.chart}>
      <h2>멜론 차트</h2>
    </div>
  )
}