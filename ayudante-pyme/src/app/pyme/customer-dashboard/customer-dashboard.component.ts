import { PersonService } from './../../shared/services/person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../shared/model/person.model';

@Component({
  selector: 'app-pyme-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  people: Person[] = [];
  displayedColumns = ['identificationNumber', 'name', 'email'];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.personService.getCustomers().subscribe((people: Person[]) => {
      this.people = people;
      console.log(people);
    });
  }
  new(): void {
    this.router.navigate(['pyme/cliente']);
  }
}
