import {Observable, of} from "rxjs";
import {Offer} from "./offer";

export abstract class MenuProviderService {
  readonly menu$: Observable<Offer[]> = of()
}
