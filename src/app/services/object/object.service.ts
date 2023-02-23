import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Object} from "../../model/object/object";

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) {


  }


  getObjectList(): Observable<Object[]> {
    return this.http.get<Object[]>(environment.api_url + "/object/");
  }


  initialize() {
    return this.http.get<Object[]>(environment.api_url + "/object/initialize").subscribe(() => {
      console.log("Object initialize")
    });

  }

}
