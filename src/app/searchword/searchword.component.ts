import { Component } from '@angular/core';

@Component({
  selector: 'app-searchword',
  templateUrl: './searchword.component.html',
  styleUrl: './searchword.component.css'
})
export class SearchwordComponent {
  searchTerm: string = '';
}
