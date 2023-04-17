import ProductTitle from "../ProductTitle";
import styles from './index.module.css';

const SharedSubtitle = ({title})=>{
    return(
        <div className={styles.flex_container}>
        <div className={styles.today_div} />
        <ProductTitle title={title} className={styles.today} />
      </div>
    )
}
export default SharedSubtitle;