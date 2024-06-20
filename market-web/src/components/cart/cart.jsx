import styles from "./cart.module.css";
import { CartList } from "./cartList";

export const Cart = ({ cart, setCart, convertPrice }) => {

  // 찜목록 삭제 버튼
  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  // 찜목록 전체 삭제 버튼
  const handleRemoveAll = () => {
    setCart([]);
  };

  // 중복된 product.id를 제거한 새로운 배열 생성
  const uniqueCart = cart.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <>
      {uniqueCart.length === 0 ? (
        <div className={styles.not}>
          <h2>찜목록에 아무것도 없습니다.</h2>
          <p>찜목록을 추가하세요.</p>
        </div>
      ) : (
        <div>
          <button 
            className={styles.remove_all_button} 
            onClick={handleRemoveAll}
          >
            찜목록 전체 삭제
          </button>
          {uniqueCart.map((cart) => {
            return (
              <CartList
                key={`key-${cart.id}`}
                cart={cart}
                setCart={setCart}
                convertPrice={convertPrice}
                handleRemove={handleRemove}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
