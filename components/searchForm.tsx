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
interface cse_thumbnail{
  src: string,
  width: string,
  height: string,
}
interface Item{
  title: string,
  cacheId?: string,
  htmlSnippet?: string,
  pagemap?: {
    cse_thumbnail?: cse_thumbnail[]
  }
}
function SearchResult({items}: {
  items: Item[] | null
}){
  console.log(items)
  if(!items) return null
  return (
    <div className={styles.search_result}>
      {items.map(item => (
        <div key={item.cacheId} className={styles.item}>
          <div className={styles.img_box}>
            {item.pagemap && item.pagemap.cse_thumbnail ?
              <img className={styles.thum} src={item.pagemap.cse_thumbnail[0].src}></img>
              : <div className={styles.thum}></div>}
          </div>

          <div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.text}>{item.htmlSnippet}</p>
          </div>
        </div>
      ))}
    </div>
  )
}