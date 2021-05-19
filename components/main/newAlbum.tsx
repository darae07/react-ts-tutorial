import Link from 'next/link'
import styles from './newAlbum.module.css'

export function NewAlbum(){
  return (
    <div className={styles.new_album}>
      <div className={styles.top_bar}>
        <a><h2>최신 앨범</h2></a>
        <div className={styles.section_na}>
          <ul>
            <li><span>전체</span></li>
            <li><span>가요</span></li>
            <li><span>POP</span></li>
          </ul>
          <span className={styles.num}>1/9</span>
          <span className={styles.icon}>
            <a><i className="fas fa-angle-left"></i></a>
            <a><i className="fas fa-angle-right"></i></a>
          </span>
        </div>
      </div>

      <div>
        <AlbumItem item={null}/>
      </div>

    </div>
  )
}
interface AlbumItem{
  name: string
}
function AlbumItem({item}: {
  item: AlbumItem | null
}){
  if(!item){
    return(
      <div>
        <div></div>
        <div>singer</div>
      </div>
    )
  }
  return null
}