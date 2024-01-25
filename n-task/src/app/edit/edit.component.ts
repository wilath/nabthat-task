import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../shared/content.model';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  public data: Array<Content> = JSON.parse(
    localStorage.getItem('data') || '[]'
  );
  public editContent!: FormGroup;
  public editIndex: number = 0;
  @Output() change = new EventEmitter<number>
  
  ngOnInit(): void {
    this.initializeForm();
    this.getId(0)
  }
  private initializeForm() {
    let name = '';
    let text = '';
    if (this.editIndex !== 0) {
      name = this.data[this.editIndex - 1].title;
      text = this.data[this.editIndex - 1].value;
    }
    this.editContent = this.fb.group({
      title: name,
      value: text,
    });
    
  }

   getId(id: number) {
    this.editIndex = id;
    const butts = document.getElementsByClassName(
      'cb'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < butts.length; i++) {
      butts[i].style.backgroundColor = 'transparent';
      butts[i].style.backgroundImage = 'none';
    }
    butts[id].style.backgroundColor = 'rgba(232, 131, 1, 1)';
    butts[id].style.backgroundImage =
      'linear-gradient(270deg, rgba(232, 131, 1, 1) 18%, rgba(146, 89, 18, 1) 100%)';
    this.initializeForm();
  }
  public onSubmit() {
    const getMaxId = (data: Content[]): number => {
      if (data.length === 0) {
        return 0;
      }
      return Math.max(...data.map((item) => item.id));
    };
    const newId =
      this.editIndex === 0
        ? getMaxId(this.data) + 1
        : this.editIndex;
    const newContent: Content = {
      id: newId,
      title: this.editContent.value.title,
      value: this.editContent.value.value,
    };
    const newData: Content[] = this.data;

    if (this.editIndex === 0) {
      newData.push(newContent);
    } else {
      const indexToEdit = this.data.findIndex(
        (item) => item.id === this.editIndex
      );
      if (indexToEdit !== -1) {
        newData[indexToEdit] = newContent;
      } else {
        alert('Element do edycji nie został znaleziony w tablicy.');
      }
    }
    this.pushChanges(newData)
    this.editContent.reset()
  }
  public deleteContent(){
    const newData = this.data.filter(item => item.id !== this.editIndex);
    this.pushChanges(newData)
    this.editContent.reset()
  }
  private pushChanges(change: Content[]){
    this.data = change,
    localStorage.setItem('data', JSON.stringify(change))
    this.change.emit(this.editIndex)
    this.getId(0)
  }
  public resetEdit(){
    this.data = JSON.parse(
      localStorage.getItem('data') || '[]'
    );
  }
}
