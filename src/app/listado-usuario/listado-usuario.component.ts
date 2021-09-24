import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  listado: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.get().subscribe((resultado) => {
      this.listado = resultado.data;
    });
  }

  // async ngOnInit(): Promise<void> {
  //   this.listado = (await this.usuarioService.getWithPromise()).data;
  // }

}
