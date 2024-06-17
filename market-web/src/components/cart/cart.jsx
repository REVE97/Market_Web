import styles from "./cart.module.css";
import { CartList } from "./cartList";

export const Cart = ( { cart, setCart, convertPrice } ) => {
  
  // 찜목록 삭제 버튼
  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  
  return (
    <>
      {cart.length === 0 ? (
        <div className={styles.not}>
          <h2>찜목록에 아무것도 없습니다.</h2>
          <p>찜목록을 추가하세요.</p>
        </div>
      ) : (
        cart.map((cart) => {
          return  <CartList 
          key={`key-${cart.id}`}
          cart={cart} 
          setCart={setCart} 
          convertPrice={convertPrice}
          handleRemove={handleRemove} />
        })
      )}
      
    </>
  );
};
