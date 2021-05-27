import React, { useState, useRef, useEffect } from 'react';
import styles from "./searchForm.module.css"
import {useQuery} from "react-query";
import {getSearch} from "../controllers/search"
import Link from 'next/link'

export default function SearchForm({param}: {
  param?: string,
}){
  const [searchText, setText] = useState<string>(param || "");
  useEffect(()=>{
    setText(param)
  }, [param]);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const searchQuery = useQuery(['search', searchText], getSearch);
  const [searchResultOpen, setSearchResultOpen] = useState(false);
  const closeResult = () => setSearchResultOpen(false);

  return (
    <div>
      <div className={styles.search}>
        <input className={styles.search_input}
          value={searchText || ""}
          onChange={onChange}
          onClick={() => setSearchResultOpen(true)}
        />
        <span className={styles.search_icon}><i className="fas fa-search fa-sm"></i></span>
      </div>
      {(searchQuery.data && searchResultOpen) && (
        <SearchResult
          items={searchQuery.data.items}
          searchText={searchText}
          closeResult={closeResult} />)}
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
function SearchResult({ items, closeResult, searchText }: {
  items: Item[] | null,
  closeResult: () => void,
  searchText: string
}){
  if(!items) return null

  const show = useRef(null);
  const handleClickOutside = ({target}) => {
    if(show.current && !show.current.contains(target)) closeResult()
  }
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.search_result} ref={show}>
      {items.map((item, i) => (
        <Link href={`/search/${encodeURIComponent(searchText)}?cacheId=${encodeURIComponent(item.cacheId)}&tab=all`} 
        key={item.cacheId + i}>
          <div className={styles.item} onClick={closeResult}>
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
        </Link>

      ))}
    </div>
  )
}