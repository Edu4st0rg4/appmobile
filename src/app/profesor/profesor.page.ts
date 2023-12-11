import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../menu/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  usuarioData: any=[];
  horarioData: any=[];
  asignaturaData: any=[];

  constructor(private api:ApiService, 
              private router: Router, 
              private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe(p => {
      const dataUser = p.get('idUsuario')??'';
      from(this.api.obtenerUsuario(dataUser)).subscribe((data: any) => {
        this.usuarioData = data;
      });

      //const horario = p.get('idUsuario')??'';
      //from(this.api.getHorario(horario)).subscribe((data: any) => {
      //  this.horarioData = data;
      //});

      //const asignatura = p.get('idUsuario')??'';
      //from(this.api.getAsignaturas(asignatura)).subscribe((data: any) => {
      //  this.asignaturaData = data;
      //});
    }); 
  }//cierra ngOnInit
}//cierra class