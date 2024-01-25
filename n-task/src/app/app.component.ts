import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from './shared/content.model';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private startingData: Array<Content> = [
    {
      id: 1,
      value:
        'Marek Aureliusz był osobą gruntownie wykształconą w kulturze greckiej, znawcą retoryki i filozofii. Jako cesarz dbał o rozwój filozofii, ustanawiając w Atenach (w 177 r.n.e.) cztery katedry (pensje dla nauczycieli) głównych nurtów filozofii: perypatetyckiej, platońskiej, epikurejskiej i stoickiej, a także katedrę retoryki. Były to pierwsze publiczne katedry filozofii w imperium. Uznaje się go za filozofa stoickiego, ostatniego znaczącego przedstawiciela tego nurtu w starożytności. Szczególnym uznaniem darzył Epikteta, odkąd w r. 121 n.e. za namową swego nauczyciela Juliusza Rustyka, przeczytał jego Diatryby. Jego filozofia ma też pewne cechy eklektyczne (m.in. wpływy Epikura, sceptyka Ainezydema i medioplatoników)',
      title: 'Marek Aurelisz',
    },
    {
      id: 2,
      value:
        'Heine worked at Marshall Islands High School in Majuro from 1975 through 1982, serving both as a classroom teacher and as a counselor.[9] In 2000, Heine founded Women United Together Marshall Islands (WUTMI), a womens rights group. Since 2005, she had been Pacific Resources for Education and Learnings Director at the Pacific Comprehensive Assistance Center.[9] Heine participated in the 2009 with the Pacific Islands Climate Change Education Partnership. She has also been associated with the Leadership Pacific Advisory Board, the Commission on Education in Micronesia, and the Human Resources in Health Task Force. Representing Aur Atoll in the Nitijeļā (Legislature), she became Minister of Education. In January 2016 Aelon Kein Ad member Casten Nemra was elected as President of the Marshall Islands. Shortly afterwards Heine along with former Minister Thomas Heine and Wilbur Heine withdrew their support of Nemra and defected to the opposition. The decision was made after Thomas was not offered a positioned in the cabinet of Nemra. Nemra was shortly afterwards removed from office in a vote of no confidence, having been in office for only two weeks. Heine was chosen as the replacement candidate by the opposition',
      title: 'President of Marshalls',
    },
    {
      id: 3,
      value:
        'Chrząszcze o ciele w zarysie owalnym z zaokrąglonym bokami, długości od 5,8 do 10,3 mm. Oskórek wierzchu ciała ma drobną, ziarenkowatą mikrorzeźbę. Głowa ma przecinkowate w widoku grzbietowym oczy rozstawione na dwunastokrotność swojej szerokości oraz nadustek o równomiernie zakrzywionych krawędziach bocznych i zaopatrzonej w dwa małe, trójkątne, pośrodkowe ząbki krawędzi przedniej',
      title: 'Chrząszcze',
    },
    {
      id: 4,
      value:
        'The first sign of rebellious activity in Arcadia came in the spring of 370 BC, when the city of Mantinea began reassembling from the villages it had been divided into, under democratic leadership. Shortly after this, a number of Arcadian communities began to assemble into a league for mutual protection against Sparta, an effort led by Lycomedes, a Mantinean. Substantial resistance was encountered at Tegea, where an oligarchic government was in power, but Tegean democrats overthrew this government with the aid of Mantinean troops, and the formation of the league proceeded. A Spartan army under Agesilaus was sent to attempt to restore the oligarchs, but achieved nothing. After driving off the Spartans, the Arcadians began work on the new city of Megalopolis, a strongly fortified capital city positioned to serve as a bulwark against Sparta',
      title: 'Arcadia rebelion',
    },
    {
      id: 5,
      value:
        'Imperium Romanum,starożytne państwo obejmujące obszary basenu Morza Śródziemnego, powstałe z przekształcenia republiki rzymskiej w system monarchiczny. Przyjmuje się, że początkiem cesarstwa był rok 27 p.n.e., kiedy Gajusz Oktawiusz otrzymał od senatu tytuł augusta (wywyższony przez bogów). Potwierdzało to pozycję Oktawiana jako najważniejszej osoby w państwie i przyniosło definitywny koniec republice rzymskiej.Początkowo formą rządów w cesarstwie był pryncypat: formalnie zachowano poprzedni ustrój, a cesarz utrzymywał najwyższą władzę w państwie, sprawując wszystkie najważniejsze urzędy republiki i kontrolując armię. W wyniku reform Dioklecjana i Konstantyna nastała era dominatu ze znacznie mocniejszą pozycją cesarską. W 395 roku cesarstwo definitywnie rozpadło się na część zachodnią i wschodnią. Cesarstwo zachodniorzymskie, po dwukrotnym zdobyciu Rzymu przez barbarzyńców, upadło w 476 roku w wyniku problemów wewnętrznych i wędrówki ludów',
      title: 'Imperium Romanum',
    },
    {
      id: 6,
      value:
        'Wielki Kanion, Wielki Kanion Kolorado (ang. Grand Canyon)  przełom rzeki Kolorado w stanie Arizona w USA przez Płaskowyż Kolorado. Za początek kanionu uznaje się Lees Ferry (niewielka stacja z motelem i przystanią dla łodzi leżąca około 12 km od miejscowości Page), natomiast koniec kanionu leży w rejonie Grand Wash Cliff leżącym około 20 km od początku jeziora Mead. Odległość pomiędzy tymi punktami mierzona nurtem rzeki Kolorado wynosi 446 km. Najgłębszym rejonem Wielkiego Kanionu jest Granite Gorge (Wąwóz Granitowy), w którym najgłębsze miejsce leży poniżej krawędzi o 1857 m (6093 stóp). Szerokość kanionu waha się od ok. 800 m (pod punktem widokowym Toroweap na North Rim  Północnej Krawędzi) do 29 km w najszerszym miejscu. Jest to największy przełom rzeki na świecie. Obszar ten stanowi park narodowy Parku Narodowego Wielkiego Kanionu.',
      title: ' Wielki Kanion',
    },
    {
      id: 7,
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Lorem ipsum',
    },
  ];

  public title = 'nabthat-task';
  private radioOption: string = '';
  private switchOption: string = '';
  public output: Array<Content> = [];
  public isEdit: boolean = false;
  @ViewChild(EditComponent) editComponent: EditComponent | undefined;
  resizeObserver = new ResizeObserver(this.handleSizeChange)

  ngOnInit(): void {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(this.startingData));
    }
    if (localStorage.getItem('output')) {
      this.output = JSON.parse(localStorage.getItem('output') || '[]');
    }
    this.animSquare();
  }
  public handleChange(id: number) {
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
      console.log('filtering');
    }
  }
  public showEdit() {
    this.isEdit = !this.isEdit;
    const editSection = document.querySelector('.edit') as HTMLElement;
    const titleSection = document.querySelector('.title') as HTMLElement;
    const height = editSection.getBoundingClientRect().height.toString().substring(0, 3);
    editSection.style.top = this.isEdit ? '140px' : `-100%`;
    titleSection.style.marginTop = this.isEdit? height + 'px' : '0px' ;
    

    if(this.isEdit){
      this.resizeObserver.observe(editSection);
    } else {
      this.resizeObserver.disconnect();
      console.log('anti resize')
      
    }
    
  }

  private handleSizeChange(entries: ResizeObserverEntry[]) {
    const titleSection = document.querySelector('.title') as HTMLElement;
    for (const entry of entries) {
      titleSection.style.marginTop = `${entry.contentRect.height}px`
      console.log('resize cold')
    }
  }
  private hidePersonalData() {
    const task = document.getElementById('task');
    const name = document.getElementById('name');
    name!.style.transform = ' translateY(-50%)';
    task!.style.transform = ' translateY(50%)';
  }
  public showPersonalData() {
    const task = document.getElementById('task');
    const name = document.getElementById('name');
    name!.style.transform = ' translateY(0)';
    task!.style.transform = 'translateY(0)';
    this.blurButtons();
  }
  public resetData() {
    localStorage.setItem('data', JSON.stringify(this.startingData));
    localStorage.removeItem('output');
    this.output = [];
    document.querySelector('form')!.reset();
    this.blurButtons();
    this.hidePersonalData();
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
    this.blurButtons();
  }
  private blurButtons() {
    const butts = document.getElementsByTagName(
      'button'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < butts.length; i++) {
      butts[i].blur();
    }
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
