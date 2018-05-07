import { Component } from '@angular/core';

@Component({
  selector: 'pyme/provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
