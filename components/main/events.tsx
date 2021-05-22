import styles from "./events.module.css";

export function Events(){
  return(
     <div className={styles.events}>
       <div className={styles.events_controles}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
       <div className={styles.events_list}>
         <ul>
           <li><img src="images/events/1.png"/></li>
           <li><img src="images/events/2.png"/></li>
           <li><img src="images/events/3.png"/></li>
           <li><img src="images/events/4.png"/></li>
           <li><img src="images/events/5.png"/></li>
           <li><img src="images/events/6.png"/></li>
           <li><img src="images/events/7.png"/></li>
         </ul>
       </div>
     </div>
  )
}