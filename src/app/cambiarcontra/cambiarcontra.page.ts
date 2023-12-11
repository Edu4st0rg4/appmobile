import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {
  nombre: string;
  apellido: string;
  email: any;
  clave:any;
  constructor(private router: Router, private alertController: AlertController) { 
    this.nombre = "Aitor"
    this.apellido ="Menta"
    
  }

  ngOnInit() {
  }

  async cambiarpass() {
    if (this.email === 'correo@duoc.cl' && this.clave === '1234' || this.email === 'profe@duoc.cl' && this.clave === '4321') {
      this.router.navigate(['menu']);
    } else {
      const alert = await this.alertController.create({ 
        header: 'Datos incorrectos.',
        message: 'Intente nuevamente.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}

