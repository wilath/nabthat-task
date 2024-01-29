import { Injectable } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";
import { Observable, startWith, tap } from "rxjs";
import { Book } from "../shared/book.model";

const booksStorageKey = 'books';
const displayedBooksStorageKey = 'displayed';

@Injectable()
export class ApplicationDataService {

  public books$: Observable<Book[]> =this.localStorageService.observe(booksStorageKey).pipe(startWith(this.localStorageService.retrieve(booksStorageKey)));

  get books(): Book[] {
    return this.localStorageService.retrieve(booksStorageKey) as Book[];
  }

  public displayedBooks$: Observable<Book[]> = this.localStorageService.observe(displayedBooksStorageKey).pipe(startWith(this.localStorageService.retrieve(displayedBooksStorageKey)));

  get displayedBooks(): Book[] {
    return this.localStorageService.retrieve(displayedBooksStorageKey) as Book[];
  }

  constructor(private localStorageService: LocalStorageService) {}

  public setBooks(content: Book[]) {
    this.localStorageService.store(booksStorageKey, content);
  }

  public setDisplayedBooks(content: Book[]) {
    this.localStorageService.store(displayedBooksStorageKey, content);
  }
}
