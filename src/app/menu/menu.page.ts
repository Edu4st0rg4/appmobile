import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from './api.service';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  email: string="";
  permitir: boolean = true;
  clave: string="";
  usuario: string = "";

  constructor(private router: Router, private crud: CrudService,private alertController: AlertController, private api: ApiService, private toastController: ToastController) {

  }
  ngOnInit() {}
  

  async errorUsuario(){
    const toast = await this.toastController.create({
      message:'Datos incorrectos, intente nuevamente',
      duration: 1000,
      position: 'top',
      color: 'danger',
    });
    await toast.present();
  }

  async iniciarSesion() {
    try {
      const usuario = await this.api.obtenerUsuario(this.usuario);
      if (usuario && usuario.contrasena === this.clave) {
        console.log('Inicio de sesión exitoso');
        await this.crud.setCurrentUser(usuario); // Guardar información del usuario

        // Redirección basada en el estado del usuario
        if (usuario.estado === 1) {
          this.router.navigate(['/inicio']); //<----PAGINA PARA REDIRIGIR ALUMNO
        } else if (usuario.estado === 0) {
          this.router.navigate(['/profesor']); //<----PAGINA PARA REDIRIGIR PROFESOR
        }
      } else {
        console.log('Datos Erróneos');
        // Inputs incorrectos
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      // Manejar errores, como problemas de conexión o de servidor
    }
  }


  async login() {
    const usuario = await this.api.obtenerUsuario(this.usuario);
    if (usuario) {
      if (usuario.clave === this.clave) {
        this.router.navigate(['inicio']);
      } else {
        this.errorUsuario();
      }
    } else {
      this.errorUsuario();
    }
  }
}//cierra class


