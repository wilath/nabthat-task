import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from './services/application-data.service';
import { Observable } from 'rxjs';
import { Book } from './shared/book.model';
import { RadioOption } from './shared/radio-option-enum';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private applicationDataService: ApplicationDataService, private http: HttpClient) {}

  private startingData: Book[] = [];

  public radioOption = RadioOption.firstOption;

  public books$: Observable<Book[]> = this.applicationDataService.books$;

  public displayedBooks$: Observable<Book[]> = this.applicationDataService.displayedBooks$;

  public isEdit: boolean = false;

  public isPersonalDataShown: boolean = false;

  public ngOnInit(): void {
    this.loadJSON()
    this.initData();
  }

  private loadJSON() {
    const JSONurl = '/assets/starting-data.json'
    this.http.get(JSONurl).subscribe( json => this.startingData = json as Book[])
  }

  public onAppendButtonClick() {
    if (this.applicationDataService.displayedBooks.length === this.applicationDataService.books.length) {
      alert('Nie ma nowych książek do dodania');
      return;
    }

    let option = this.getBookBasedOnChosenRadioOption();

    if (this.applicationDataService.displayedBooks.find(el => el.id == option.id)) {
      alert('Ta książka już istnieje w bloku trzecim')
      return;
    }

    this.applicationDataService.setDisplayedBooks([...this.applicationDataService.displayedBooks, option]);
  }

  public onChangeButtonClick() {
    let option = this.getBookBasedOnChosenRadioOption();

    this.applicationDataService.setDisplayedBooks([option]);
  }

  public handleEditBook(newBook: Book) {
    const currentBooks = this.applicationDataService.books;

    const isNewBook = newBook.id === 0;
    if (isNewBook) {
      this.addBook(currentBooks, newBook);

      return;
    }

    this.updateBooks(currentBooks, newBook);
  }

  public handleDeleteBook(bookId: number) {
    const newBooks = this.applicationDataService.books.filter(book => book.id !== bookId);
    this.applicationDataService.setBooks(newBooks)
    this.checkIfOutputHasBookAndDelete(bookId)
  }

  public resetData() {
    this.applicationDataService.setBooks(this.startingData);
    this.applicationDataService.setDisplayedBooks([]);
    this.isPersonalDataShown = false;
  }

  private getBookBasedOnChosenRadioOption() {
    return this.radioOption == RadioOption.randomOption
      ? this.getRandomNotChosenBook()
      : this.applicationDataService.books[+this.radioOption];
  }

  private updateBooks(currentBooks: Book[], newBook: Book) {
    const newBooks = currentBooks.map(book => book.id === newBook.id ? book = newBook : book);

    this.applicationDataService.setBooks(newBooks);
    this.checkIfOutputHasBookAndEdit(newBook);
  }

  private addBook(currentBooks: Book[], newBook: Book) {
    const newId = currentBooks.length > 0 ? currentBooks.sort(b => b.id)[currentBooks.length - 1].id + 1 : 1;

    this.applicationDataService.setBooks([...currentBooks, { ...newBook, id: newId }]);
  }

  private getRandomNotChosenBook() {
    const chosenBooksIds = this.applicationDataService.displayedBooks.map(el => el.id)
    const notChosenBooks = this.applicationDataService.books.filter(item => !chosenBooksIds.includes(item.id))

    return notChosenBooks[Math.floor(Math.random() * notChosenBooks.length)]
  }

  private initData() {
    setTimeout(() => {
      if (this.applicationDataService.books == null) {
        this.applicationDataService.setBooks(this.startingData);
      }

      if (this.applicationDataService.displayedBooks == null) {
        this.applicationDataService.setDisplayedBooks([]);
      }
    });
  }

  private checkIfOutputHasBookAndDelete(bookId: number) {
    const currentDisplayedBooks = this.applicationDataService.displayedBooks;

    if (currentDisplayedBooks.map(el => el.id).includes(bookId)) {
      const newOutput = currentDisplayedBooks.filter(book => book.id !== bookId);
      this.applicationDataService.setDisplayedBooks(newOutput);
    }
  }

  private checkIfOutputHasBookAndEdit(newBook: Book) {
    const currentDisplayedBooks = this.applicationDataService.displayedBooks

    if (currentDisplayedBooks.map(el => el.id).includes(newBook.id)) {
      const newOutput = currentDisplayedBooks.map(book => book.id === newBook.id ? newBook : book)
      this.applicationDataService.setDisplayedBooks(newOutput)
    }
  }
}

