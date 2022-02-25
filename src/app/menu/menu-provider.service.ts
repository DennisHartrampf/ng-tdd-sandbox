import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Menu} from "./menu";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MenuProviderService {
  readonly menu$: Observable<Menu>;

  constructor(http: HttpClient) {
    this.menu$ = http.get<Menu>("/api/menu");
  }
}
