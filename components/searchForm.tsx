import React, { useState } from 'react';
import styles from "./searchForm.module.css"

export default function SearchForm(){
  const [searchText, setText] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return (
    <div className={styles.search}>
      <input className={styles.search_input} value={searchText} onChange={onChange}/>
      <span className={styles.search_icon}><i className="fas fa-search fa-sm"></i></span>
    </div>
  )
}