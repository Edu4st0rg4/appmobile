import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../menu/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarioData: any=[];
  horarioData: any=[];
  asignaturaData: any=[];

  constructor(private api:ApiService, 
              private router: Router, 
              private activeroute:ActivatedRoute) { }

  ngOnInit() {


      //   const horario = p.get('idUsuario')??'';
      //   this.api.getHorario(horario).subscribe((data: any) => {
      //     this.horarioData = data;
      //   });
      
      // const asignatura = p.get('idUsuario')??'';
      // this.api.getAsignaturas(asignatura).subscribe((data: any) => {
      //   this.asignaturaData = data;
      // });

  }//cierra ngOnInit
}//cierra class
