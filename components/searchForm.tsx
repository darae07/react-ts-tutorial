import React, { useState } from 'react';
import styles from "./searchForm.module.css"
import {useQuery} from "react-query";
import {getSearch} from "../controllers/search"

export default function SearchForm(){
  const [searchText, setText] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const searchQuery = useQuery(['search', searchText], getSearch);

  return (
    <div>
      <div className={styles.search}>
        <input className={styles.search_input} value={searchText} onChange={onChange} />
        <span className={styles.search_icon}><i className="fas fa-search fa-sm"></i></span>
      </div>
      {searchQuery.data && <SearchResult items={searchQuery.data.items}/>}
    </div>
  )
}

interface Item{
  title: string,
  cacheId?: string,
}
function SearchResult({items}: {
  items: Item[] | null
}){
  if(!items) return null
  return (
    <div className={styles.search_result}>
      {items.map(item => (
      <div key={item.cacheId}>
        <p>{item.title}</p>
      </div>
      ))}
    </div>
  )
}