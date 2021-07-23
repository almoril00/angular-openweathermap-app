import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI : String
  apiKey = 'bbe7914dc116487ce4e9f4c9811b117e'


  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=es&q=`
   }


   getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
   }

}
