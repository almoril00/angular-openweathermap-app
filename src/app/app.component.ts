import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather // Clase undefined para recoger los datos
  mensajeError : string = ""

  constructor (private weatherService:WeatherService){
  }

  ngOnInit(){
  }

  getWeather(cityName:string, countryCode:string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => this.weather = res,
      err => console.log(err)     //Manejar el error
    )
  }


  submitLocation(cityName:HTMLInputElement, countryCode:HTMLInputElement){
    //Validamos que los campos del formulario no están vacios
    if(cityName.value && countryCode.value){
      //Hacer petición
      this.getWeather(cityName.value, countryCode.value)

      cityName.value =''
      countryCode.value = ''
      this.mensajeError = ''
    }else{
      this.mensajeError = 'Introduzca algún valor. Los campos no deben estar vacíos.'
    }

    cityName.focus()  //Coge el foco después de hacer submit
    return false      //Para que no refresque el formulario al hacer submit
  }

  
}
