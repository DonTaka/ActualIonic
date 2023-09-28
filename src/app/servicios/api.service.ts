import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiURL = 'http://localhost:3000';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-type': "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  }
  constructor(private http: HttpClient) { }

  //Listar
  listarPost(): Observable<any> {
    return this.http.get(this.apiURL + "/posts").pipe(
      retry(3)
    )
  }
  //Buscar
  buscarPost(id: any): Observable<any> {
    //http://localhost:3000/posts/1
    return this.http.get(this.apiURL + "/posts/" + id).pipe(
      retry(3)
    )
  }
  //Agregar
  agregarPost(post: any): Observable<any> {
    return this.http.post(this.apiURL + "/posts", post, this.httpOptions).pipe(
      retry(3)
    )
  }
  //Modificar
  updatePost(id: any, post: any): Observable<any> {
    return this.http.put(this.apiURL + "/posts/" + id, post, this.httpOptions).pipe(
      retry(3)
    )
  }
  //Eliminar
  eliminar(id: any): Observable<any> {
    return this.http.delete(this.apiURL + "/posts/" + id).pipe(
      retry(3)
    )
  }
}
