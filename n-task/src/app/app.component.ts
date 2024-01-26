import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Content } from './shared/content.model';
import { EditComponent } from './edit/edit.component';
import { startData } from './shared/startingData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  
  constructor(private renderer: Renderer2, private el: ElementRef){}

  private startingData: Array<Content> = startData

  public title = 'nabthat-task';

  private radioOption: string = '';

  private switchOption: string = '';

  public output: Array<Content> = [];

  public isEdit: boolean = false;

  public isPersonalDataShown: boolean = false;

  @ViewChild(EditComponent) editComponent: EditComponent | undefined;
  
  resizeObserver = new ResizeObserver(this.handleSizeChange);

  

  ngOnInit(): void {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(this.startingData));
    }
    if (localStorage.getItem('output')) {
      this.output = JSON.parse(localStorage.getItem('output') || '[]');
    }
    this.animSquare();
  }
  private addData() {
    let nStorage: Content[] = JSON.parse(localStorage.getItem('data') || '[]');
    let nOutput: Content[] = JSON.parse(localStorage.getItem('output') || '[]');

    const isElementInOutput = (el: Content) => {
      return nOutput.some((item) => item.id === el.id);
    };
    const getRandomElement = () => {
      const randIndex = Math.floor(Math.random() * nStorage.length);
      return nStorage.splice(randIndex, 1)[0];
    };
    const insertElement = (el: Content) => {
      if (this.switchOption === 'switch1' && nOutput.length > 0) {
        nOutput[nOutput.length - 1] = el;
      } else {
        nOutput.push(el);
      }
      this.output = nOutput;
      localStorage.setItem('output', JSON.stringify(nOutput));
    };
    if (nStorage.length !== nOutput.length) {
      switch (this.radioOption) {
        case 'option0':
          const el0 = nStorage[0];
          if (!isElementInOutput(el0)) {
            insertElement(el0);
          } else {
            alert('Ten Element Już jest na liście');
          }
          break;
        case 'option1':
          const el1 = nStorage[1];
          if (!isElementInOutput(el1)) {
            insertElement(el1);
          } else {
            alert('Ten Element Już jest na liście');
          }
          break;
        case 'option2':
          let randElement = getRandomElement();
          while (nOutput.some((item) => item.id === randElement.id)) {
            randElement = getRandomElement();
          }

          insertElement(randElement);
          break;
        default:
          alert('Wybierz Opcję');
          break;
      }
    } else {
      alert('Nie ma nowych tekstów');
    }
  }
  public handleChangeFromEdit(id: number) {
    const data: Content[] = JSON.parse(localStorage.getItem('data') || '[]');
    const changedItem = data.find((item) => item.id === id);
    if (changedItem) {
      this.output = this.output.map((item) =>
        item.id === id ? { ...changedItem } : item
      );
    } else {
      const newOutput = this.output.filter((item) => item.id !== id);
      localStorage.setItem('output', JSON.stringify(newOutput));
      this.output = newOutput;
      
    }
  }
  public showEditMenu() {
    this.isEdit = !this.isEdit;
    const editSection = this.el.nativeElement.querySelector('.edit') as HTMLElement;
    const titleSection = this.el.nativeElement.querySelector('.title') as HTMLElement;

    const height = editSection.getBoundingClientRect().height.toString().substring(0, 3);

    this.renderer.setStyle(editSection, 'top', this.isEdit ? '140px' : '-100%');
    this.renderer.setStyle(titleSection, 'marginTop', this.isEdit ? `${height}px` : '0px');
    
    if(this.isEdit){
      this.resizeObserver.observe(editSection);
    } else {
      this.resizeObserver.disconnect();
    }
   
    
  }
  private handleSizeChange(entries: ResizeObserverEntry[]) {
     const titleSection = document.querySelector('.title') as HTMLElement;
    for (const entry of entries) {
      titleSection.style.marginTop = `${entry.contentRect.height}px` 
    }
  }

  public resetData() {
    localStorage.setItem('data', JSON.stringify(this.startingData));
    localStorage.removeItem('output');
    this.output = [];
    document.querySelector('form')!.reset()
    this.isPersonalDataShown = false;
    if (this.editComponent) {
      this.editComponent!.resetEdit();
    }

  }

  public receiveRadio(event: string) {
    this.radioOption = event;
  }

  public receiveSwitch(event: string) {
    this.switchOption = event;
    this.addData();
  }

  /* JS for square animation */
  private animSquare() {
    const animatedElement = document.getElementById('animatedElement');
    if (animatedElement) {
      animatedElement.addEventListener('mouseenter', () => {
        animatedElement.classList.add('animation');
      });
      animatedElement.addEventListener('focus', () => {
        animatedElement.classList.add('animation');
      });

      animatedElement.addEventListener('animationend', (event) => {
        if (event.animationName.slice(-8) === 'jumpAnim') {
          animatedElement.classList.remove('animation');
        }
      });
    }
  }
}
