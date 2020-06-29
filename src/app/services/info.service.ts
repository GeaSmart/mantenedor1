import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private personas = [
    {
      dni:12345678,
      nombres:'Gerson Eder Azabache Martinez',
      correo:'gerson@mail.com',
      fecha_alta:'01/01/2020',
      numero_celular:123456789,
      activo:1
    },
    {
      dni:13325598,
      nombres:'Estefany Acosta Alayo',
      correo:'tefy@mail.com',
      fecha_alta:'02/01/2020',
      numero_celular:956622012,
      activo:1
    },
    {
      dni:78955410,
      nombres:'Yasmin Collazos Briones',
      correo:'yami@mail.com',
      fecha_alta:'03/01/2020',
      numero_celular:12003598,
      activo:0
    }
  ]

  constructor() { }

  obtenerData(valor):Observable<Array<any>>{
    return new Observable(
      (suscriber)=>{
        setTimeout(() => {
          /*alert(valor);*/
          const data  = this.personas.filter(e => e.nombres.indexOf(valor) >= 0 );
          suscriber.next(data);
        }, 500);
      }
    );
  }

}
