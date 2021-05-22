import styles from "./loginWrap.module.css";

export function LoginWrap() {
  return (
      <div className={styles.id_wrap}>
        <div className={styles.login_wrap}>
          <div className={styles.button_login}>
            <div className={styles.top_area}>
              <p>멜론을 더 안전하게 이용하세요.</p>
              <a href="">회원가입</a>
            </div>
            <button className={styles.btn_login}>로그인</button>
          </div>
        </div>
        <div className={styles.promotion_wrap}></div>
      </div>
  )
}