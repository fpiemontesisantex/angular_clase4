import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('active', [Validators.required])
  });

  constructor(
    private usuarioService: UsuarioService
  ) { 
  }

  ngOnInit(): void {
    // this.form.controls['status'].disable();
  }

  guardar() {
    if (this.form.invalid) {
      return;
    }

    const usuario = this.form.value as Usuario;
    this.usuarioService.guardar(usuario).subscribe(
      (result) => {
        alert('usuario creado');
      },
      (e) => {
        alert('Ha ocurrido un error' + JSON.stringify(e));
      });
  }

}
