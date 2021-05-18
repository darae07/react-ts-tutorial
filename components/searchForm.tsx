import styles from "./searchForm.module.css"

export default function SearchForm(){
  return (
    <div className={styles.search}>
      <input className={styles.search_input}/>
      <span><i className="fas fa-search fa-sm"></i></span>
    </div>
  )
}