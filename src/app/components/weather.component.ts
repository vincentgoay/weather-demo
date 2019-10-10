import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/weather';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data: Weather = new Weather("Cities", 0, 0, 0, "No description", 0, 0);

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const cityName = this.activatedRoute.snapshot.params.cityName;
    console.log("City Name: ", cityName);
    this.data.cityName = cityName;
  }

  back() {
    console.log("back button pressed")
    this.router.navigate(["/"]);
  }
}
