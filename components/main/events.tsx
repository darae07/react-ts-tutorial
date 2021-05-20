import styles from "./events.module.css";

export function Events(){
  return(
     <div>
       <div></div>
       <div className={styles.events_list}>
         <img src="images/events/1.png"/>
         <img src="images/events/2.png"/>
       </div>
     </div>
  )
}