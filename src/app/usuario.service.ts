import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  guardar(usuario: Usuario) {
    const url = 'https://gorest.co.in/public/v1/users';
    const token = '28c1df1c3034a2c5c0962c1f480e82b53376d20d70e09b19d95c162f86c364e7';
    return this.http.post(url, usuario, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  get() {
    const url = 'https://gorest.co.in/public/v1/users';
    return this.http.get<{data: Usuario[]}>(url);
  }

  getWithPromise() {
    const url = 'https://gorest.co.in/public/v1/users';
    return this.http.get<{data: Usuario[]}>(url).toPromise();
  }
}
