
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/api/usuario/login'; 
  result :string = "";


  constructor(private http: HttpClient) { }
  
  logar(usuario: string, senha: string): string {  
    let headers = new HttpHeaders().set('usuario', usuario); 
    headers = headers.append('senha', senha); 

   this.http.get<string>(this.url, { headers: headers}).subscribe(item => {
        this.result = item;
        alert(item);
        
    });  

    return this.result;
  }  
}