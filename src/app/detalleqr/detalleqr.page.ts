import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../menu/api.service';

@Component({
  selector: 'app-detalleqr',
  templateUrl: './detalleqr.page.html',
  styleUrls: ['./detalleqr.page.scss'],
})
export class DetalleqrPage implements OnInit {
  infoqr: any=[];
  constructor(private api:ApiService, private activerouter: ActivatedRoute, private router:Router) { }

  ngOnInit() {}
}

