import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioCadastro } from '../../models/usuarioCadastro';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  usuario: UsuarioCadastro = {
    dataNascimento: "",
    email: "",
    nome: "",
    nomeRestaurante: "Presto",
    senha: ""
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() { }

  addUser() {
    this.usuarioService.addUsuario(this.usuario)
      .subscribe(response => {
        console.log(response);
      },
        error => { console.log(error) }
      )
  }

}
