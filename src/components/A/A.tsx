// import './a.css'
import styles from './a.module.css';


const A = () => {


    // return <h2 className="title">A</h2>

    return <h2 className={styles.title}>A</h2>;
};
export default A;