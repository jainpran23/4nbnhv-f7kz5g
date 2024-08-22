import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor(){}

  ngOnInit(): void {}

  addToCart() {
    this.bookEmitter.emit(this.book);
  }
    
}
