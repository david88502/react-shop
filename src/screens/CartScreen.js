import { useContext } from 'react';
import { Store } from '../Store';
export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return <div>CartScreen</div>;
}
