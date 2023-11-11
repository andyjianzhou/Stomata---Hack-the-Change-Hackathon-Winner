import Button from '@mui/material/Button';
import { RecommendedProductCard } from "../ProductCards/RecommendedProductCard";
import styles from "./ProductPage.module.scss";
// import turtle from "../../turtle.jpeg";

const ProductPage = ({product}) => {
   return (
      <div className={styles.wrapper}>
            <div className={styles.image}
               style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${product.imageUrl})`,
                  backgroundSize: "cover",
               }}   
            >
               {/* <img src={product.imageUrl} alt={product.title} /> */}
               <h2 className={styles.title}>{product.title}</h2>
            </div>
            <div className={styles.container}>
               <RecommendedProductCard
                  title={"Product Title"}
                  score={7.5}
                  metrics={[{"value": 4, "name": "carbon-1-metric", "points": ["yo", "yo", "yo"]}, {"value": 5, "name": "carbon-2 metric", "points": ["yo", "yo", "yo"]}, {"value": 8.9, "name": "other-metric", "points": ["yo", "yo", "yo"]}]}
                  // imgUrl={turtle}
               />
               <div className={styles.buy}>
                  <Button variant="contained" size="small" fullWidth className={styles.button}>Add to Cart</Button>
               </div>
            </div>
      </div>
   );
};

export default ProductPage;
