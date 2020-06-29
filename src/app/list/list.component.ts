import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cadena = '';
  data = [];
  loading = false;

  constructor(private InfoService: InfoService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.loading=true;
    this.data=[];
    this.InfoService.obtenerData(this.cadena).subscribe(
      (response) => {
        this.data = response;
        this.loading = false;
      }
    );
  }

}
