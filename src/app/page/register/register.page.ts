import { UsuarioDTO } from './../../models/usuario.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  userForm: FormGroup;
  data: any;
  usuario: Usuario;
  errorMessage = "";
  successMessage = "";
  loading = false;


  constructor(private fb: FormBuilder, public router: Router, private us: UsuarioService) { }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      confemail: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      nomeRestaurante: ['', Validators.required]
    });
  }

  insertUser() {
    console.log(this.userForm.value)
    this.us.addUser(this.userForm.value).subscribe(
      (response) => {
        this.usuario = response;
        this.successMessage = response;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }

  // confereEmailValidator(email) {
  //   if (this.usuarioForm.value.email === this.usuarioForm.value.confemail) {
  //     return true;
  //   }
  //   return false;
  // }

  // register() {
  //   this.router.navigate(['/login']);
  // }

}
