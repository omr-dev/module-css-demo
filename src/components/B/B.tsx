// import './b.css'
import styles from './b.module.css'

const B=()=>{
    // return <h2 className="title">B</h2>
    return <h2 className={styles.title}>B</h2>

}
export default B;