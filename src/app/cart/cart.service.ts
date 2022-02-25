import {Observable} from "rxjs";
import {ShoppingCart} from "./shopping-cart";

export class CartService {
  currentShoppingCart$!: Observable<ShoppingCart>;
  // TODO: Implement
  /*
  - Schittstelle zum Cart
  - Methoden: add item, remove item...
  - Delegiert an Cart
  - Event vom "Buy"-Button hochpropagieren bis zu MenuWrapper
  - MenuWrapper kennt CartService und ruft z.B. addItem auf
  - Cart-Objekt muss immutable sein
  - Cart-Objekt erstmal wahrscheinlich BehaviourSubject, könnte später aber auch irgendein State-Storage hinter stehen
   */
}
