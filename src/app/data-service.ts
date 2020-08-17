import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';


@Injectable()

export class DataService {

  constructor(private httpClient: HttpClient) {}

  urlBase = 'http://localhost:8080/apiPersonas/webservice/personas';

  cargarPersonas(){
    return this.httpClient.get(this.urlBase);
  }

  agregarPersona(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona)
      .subscribe(
        (response) => {
          console.log('resultado de modificar: ' + response);
        },
        (error) => console.log('error al modificar ersonar')
      );
  }

  eliminarPersona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
      .subscribe(
        (response) => {
          console.log('resultado de eliminar: ' + response);
        },
        (error) => console.log('error al eliminar ersonar')
      );

  }

}
