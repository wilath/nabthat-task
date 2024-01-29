import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  @Input() public books: Book[] = [];

  @Output() public onDeleteBook = new EventEmitter<number>();
  @Output() public onEditBook = new EventEmitter<Book>();

  public editBookForm: FormGroup = new FormGroup({});

  public get isNewBook() {
    return this.editBookForm.get('chosenBook').value === 0;
  }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(isDelete: boolean) {
    isDelete ? this.onSubmitDeleteBook() : this.onSubmitEditBook()
  }

  private initializeForm() {
    this.editBookForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      chosenBook: [0, Validators.required]
    });

    this.listenToChosenBookChanges();
  }

  private listenToChosenBookChanges() {
    this.editBookForm.get('chosenBook').valueChanges.subscribe(val => {
      const bookToSet = this.books.find(b => b.id == val);
      this.editBookForm.get('description').setValue(bookToSet != null ? bookToSet.description : '');
      this.editBookForm.get('title').setValue(bookToSet != null ? bookToSet.title : '');
    })
  }

  private onSubmitDeleteBook() {
    const bookIdToDelete = this.editBookForm.get('chosenBook').value;
    this.onDeleteBook.emit(bookIdToDelete);
    this.initializeForm();
  }

  private onSubmitEditBook() {
    const editedBook: Book = {
      id: this.editBookForm.get('chosenBook').value,
      description: this.editBookForm.get('description').value,
      title: this.editBookForm.get('title').value
    };
    this.onEditBook.emit(editedBook);

    if (editedBook.id === 0) {
      this.initializeForm();
    }
  }
}
