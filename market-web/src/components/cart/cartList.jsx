import styles from "./cart.module.css"
import { useNavigate } from 'react-router-dom';

export const CartList = ( { cart, convertPrice, handleRemove } ) => {


  // 찜목록에서 제품 페이지 버튼 클릭시 해당 제품 페이지 이동
  const navigate = useNavigate();
  const handlePageButtonClick = () => {
        navigate(`/product/${cart.id}`);
  };

    return (
        
        // 찜목록 제품목록
      <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
          
          <div className={styles.cart_product_image}>
            <img src={cart.image} alt="product-img" />
          </div>

          <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{cart.provider}</p>
            <p className={styles.product_name}>{cart.name}</p>
            <p className={styles.price}>{convertPrice(cart.price)}원</p>
          </div>

        </div>

        {/* 제품 페이지로 이동하는 버튼 */}
        <button className={styles.page_button} onClick={handlePageButtonClick}>
          제품 페이지
        </button>

        {/* 찜목록 삭제 */}
        <div className={styles.product_remove} 
             onClick={() => handleRemove(cart.id)}>
          <img src="/images/icon-delete.svg" alt="delete" />
        </div>

      </section>
        
    )
}