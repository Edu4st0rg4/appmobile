import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleqrPageRoutingModule } from './detalleqr-routing.module';

import { DetalleqrPage } from './detalleqr.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleqrPageRoutingModule
  ],
  declarations: [DetalleqrPage]
})
export class DetalleqrPageModule {}
