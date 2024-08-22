import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {

  books:Book[] =[
    {
      name : 'godaan',
      author :'pream chandra',
      image :'https://m.media-amazon.com/images/I/71U6ZbG2TEL._SL1000_.jpg',
      amount :500
    },
    {
      name : 'THE GOPI DIARIES ',
      author : 'sudha murty',
      image :  'https://m.media-amazon.com/images/I/516w2YytYNL._SX342_SY445_.jpg',
      amount :600
    
    }
  ]

  isShowing: boolean = true;
  myName: String ='';

  card: Book[]=[];

  ngOnInit(): void {
  }
  constructor() {}

  addToCart(book:Book){
    console.log(book);

  }
}
