import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { City } from '../models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities = [];

  constructor() { }

  ngOnInit() {
  }

  addCity(form: NgForm) {
    console.log(form.value.city);
    const city = form.value.city;

    if (!this.cities.includes(city)) {
      this.cities.push({ 'name': city });
      console.log(this.cities);
    }
  }
}
