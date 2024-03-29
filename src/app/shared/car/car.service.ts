import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CarService {
  public API = "//localhost:8080";
  public CAR_API = this.API + "/cars";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.API + "/cool-cars");
  }

  get(id) {
    return this.http.get(this.CAR_API + "/" + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<any>;
    if (car["id"]) {
      result = this.http.put(this.CAR_API + "/" + car.id, car);
    } else {
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  remove(id) {
    return this.http.delete(this.CAR_API + "/" + id);
  }
}
