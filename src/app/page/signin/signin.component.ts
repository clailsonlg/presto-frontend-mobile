import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioCadastro } from '../../models/usuarioCadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  restaurants: String[] = [];

  usuario: UsuarioCadastro = {
    nome: "",
    email: "",
    senha: "",
    dataNascimento: "",
    nomeRestaurante: ""
  }

  constructor(private usuarioService: UsuarioService, private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(
      response => {
        response.forEach(nome => {
          this.restaurants.push(nome);
        })
      }
    )
  }

  addUser() {
    this.usuarioService.addUsuario(this.usuario)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
        error => { console.log(error) }
      )
  }

}
