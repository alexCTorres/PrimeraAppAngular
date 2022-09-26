import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';
  mensaje="";
  registro = false;
  nombre:String="";
  apellido = "";

  registrarUsuarios():void{
    if(this.nombre=="" || this.apellido==""){
      alert("Llene todos los campos");
    }else{
    this.registro = true;
    this.mensaje ="Registrado Correctamente";
  }
}
}
