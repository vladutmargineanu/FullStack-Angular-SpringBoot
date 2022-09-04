import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of object
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Vladut", "Margineanu", "vladut.margineanu@gmail.com", 5000),
    new SalesPerson("Dragos", "Margineanu", "dragos.margineanu@gmail.com", 4000),
    new SalesPerson("Alin", "Margineanu", "alin.margineanu@gmail.com", 3000),
    new SalesPerson("Marian", "Margineanu", "marian.margineanu@gmail.com", 2000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
