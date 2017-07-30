import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Toyota','Nissan','Ford'];

  	myCars() {

  		return 'I love cars';
  	}

}
