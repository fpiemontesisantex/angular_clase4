import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  });

  constructor() { 
  }

  ngOnInit(): void {
  }

  guardar() {
    if (this.form.invalid) {
      alert('VALORES INCORRECTOS');
      return;
    }
  }

}
