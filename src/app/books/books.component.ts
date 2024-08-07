import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  name = 'Godaan';
  author = 'Pream chandra';
  src = 'https://m.media-amazon.com/images/I/71U6ZbG2TEL._SL1000_.jpg';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
