import { PersonService } from './../../shared/services/person.service';
import { Component } from '@angular/core';
import { Person } from '../../shared/model/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pyme-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  person: Person = Person.default();

  constructor(private personService: PersonService, private router: Router) {
  }

  savePerson(): void {
    this.personService.add(this.person).subscribe((data: any) => {
      this.router.navigate(['pyme/directorio/clientes']);
    });
  }
}
