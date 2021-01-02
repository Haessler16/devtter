import styles from "./style.module.css"

export default function Avatar({ alt, src, text }) {
  return (
    <>
      <div className={styles.container}>
        <img src={src} className={styles.avatar} alt={alt} title={alt} />
        {text && <strong>{text}</strong>}
      </div>
    </>
  )
}
