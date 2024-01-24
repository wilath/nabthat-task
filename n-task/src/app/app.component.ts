import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.getItem('data')) {
      this.resetData()
    }
  }
  startingData = [
    {
      0: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit facilisis libero. Maecenas venenatis elementum odio, id sollicitudin tortor efficitur elementum. Sed in velit maximus, volutpat augue placerat, iaculis mi. Maecenas nec orci tincidunt, posuere augue id, tempus tellus. Sed nulla nisi, ullamcorper sit amet iaculis cursus, dignissim ac nunc. In eget libero augue. Quisque porttitor velit mattis viverra euismod. In auctor condimentum tincidunt. Phasellus purus urna, gravida eget vestibulum sit amet, dapibus vel nisi. Integer nunc odio, feugiat tempus quam non, suscipit mattis turpis. Proin sodales commodo lacus varius pretium. Aliquam a est at nisi semper iaculis nec ac neque. Integer ac lacinia mauris. Pellentesque est metus, euismod in placerat quis, vehicula eget libero. Suspendisse finibus a quam et malesuada. Donec semper est ut lorem condimentum egestas quis a augue.',
    },
    {
      1: 'Marek Aureliusz był osobą gruntownie wykształconą w kulturze greckiej, znawcą retoryki i filozofii. Jako cesarz dbał o rozwój filozofii, ustanawiając w Atenach (w 177 r.n.e.) cztery katedry (pensje dla nauczycieli) głównych nurtów filozofii: perypatetyckiej, platońskiej, epikurejskiej i stoickiej, a także katedrę retoryki. Były to pierwsze publiczne katedry filozofii w imperium. Uznaje się go za filozofa stoickiego, ostatniego znaczącego przedstawiciela tego nurtu w starożytności. Szczególnym uznaniem darzył Epikteta, odkąd w r. 121 n.e. za namową swego nauczyciela Juliusza Rustyka, przeczytał jego Diatryby. Jego filozofia ma też pewne cechy eklektyczne (m.in. wpływy Epikura, sceptyka Ainezydema i medioplatoników)',
    },
    {
      2: 'Heine worked at Marshall Islands High School in Majuro from 1975 through 1982, serving both as a classroom teacher and as a counselor.[9] In 2000, Heine founded Women United Together Marshall Islands (WUTMI), a womens rights group. Since 2005, she had been Pacific Resources for Education and Learnings Director at the Pacific Comprehensive Assistance Center.[9] Heine participated in the 2009 with the Pacific Islands Climate Change Education Partnership. She has also been associated with the Leadership Pacific Advisory Board, the Commission on Education in Micronesia, and the Human Resources in Health Task Force. Representing Aur Atoll in the Nitijeļā (Legislature), she became Minister of Education. In January 2016 Aelon Kein Ad member Casten Nemra was elected as President of the Marshall Islands. Shortly afterwards Heine along with former Minister Thomas Heine and Wilbur Heine withdrew their support of Nemra and defected to the opposition. The decision was made after Thomas was not offered a positioned in the cabinet of Nemra. Nemra was shortly afterwards removed from office in a vote of no confidence, having been in office for only two weeks. Heine was chosen as the replacement candidate by the opposition',
    },
    {
      3: 'Chrząszcze o ciele w zarysie owalnym z zaokrąglonym bokami, długości od 5,8 do 10,3 mm. Oskórek wierzchu ciała ma drobną, ziarenkowatą mikrorzeźbę. Głowa ma przecinkowate w widoku grzbietowym oczy rozstawione na dwunastokrotność swojej szerokości oraz nadustek o równomiernie zakrzywionych krawędziach bocznych i zaopatrzonej w dwa małe, trójkątne, pośrodkowe ząbki krawędzi przedniej',
    },
    {
      4: 'The first sign of rebellious activity in Arcadia came in the spring of 370 BC, when the city of Mantinea began reassembling from the villages it had been divided into, under democratic leadership. Shortly after this, a number of Arcadian communities began to assemble into a league for mutual protection against Sparta, an effort led by Lycomedes, a Mantinean. Substantial resistance was encountered at Tegea, where an oligarchic government was in power, but Tegean democrats overthrew this government with the aid of Mantinean troops, and the formation of the league proceeded. A Spartan army under Agesilaus was sent to attempt to restore the oligarchs, but achieved nothing. After driving off the Spartans, the Arcadians began work on the new city of Megalopolis, a strongly fortified capital city positioned to serve as a bulwark against Sparta',
    },
    {
      5: 'Imperium Romanum,starożytne państwo obejmujące obszary basenu Morza Śródziemnego, powstałe z przekształcenia republiki rzymskiej w system monarchiczny. Przyjmuje się, że początkiem cesarstwa był rok 27 p.n.e., kiedy Gajusz Oktawiusz otrzymał od senatu tytuł augusta (wywyższony przez bogów). Potwierdzało to pozycję Oktawiana jako najważniejszej osoby w państwie i przyniosło definitywny koniec republice rzymskiej.Początkowo formą rządów w cesarstwie był pryncypat: formalnie zachowano poprzedni ustrój, a cesarz utrzymywał najwyższą władzę w państwie, sprawując wszystkie najważniejsze urzędy republiki i kontrolując armię. W wyniku reform Dioklecjana i Konstantyna nastała era dominatu ze znacznie mocniejszą pozycją cesarską. W 395 roku cesarstwo definitywnie rozpadło się na część zachodnią i wschodnią. Cesarstwo zachodniorzymskie, po dwukrotnym zdobyciu Rzymu przez barbarzyńców, upadło w 476 roku w wyniku problemów wewnętrznych i wędrówki ludów',
    },
    {
      6: 'Stefan Banach ur. 30 marca 1892 w Krakowie, zm. 31 sierpnia 1945 we Lwowie, polski matematyk, czołowy przedstawiciel lwowskiej szkoły matematycznej, profesor zwyczajny związany z Uniwersytetem Lwowskim, członek Polskiej Akademii Umiejętności (PAU). Banach to jeden z pionierów i klasyków analizy funkcjonalnej, znany m.in. z opisania twierdzenia o kontrakcji i przestrzeni Banacha. Zajmował się też teorią mnogości, w której podał paradoks rozkładu kuli razem z logikiem Alfredem Tarskim, a także był autorem podręczników szkolnych i akademickich do matematyki i mechaniki. Banacha upamiętniają nazwy terminów naukowych, instytucji, nagród oraz pomniki.',
    },
    {
      7: 'Flagstaff to miasto w Stanach Zjednoczonych, w północnej części stanu Arizona, na wysokości 2100 metrów. Około 75 tys. mieszkańców. Siedziba administracyjna hrabstwa Coconino, u podnóża gór San Francisco o najwyższym łańcuchu górskim w stanie Arizona. Humphreys Peak jest najwyższym punktem w Arizonie (3850 m n.p.m.), leżącym około 16 km na północ od miasta. Nazwa miasta jest połączeniem dwóch angielskich słów flaga, bandera oraz staff oznaczającego między innymi słup. Wiąże się ona z historią z 1855 roku. Wtedy to tyczono drogę z Rio Grande w Nowym Meksyku do Fort Tejon w Kalifornii i Święta Wielkanocne przypadły właśnie w tym miejscu. Dla uczczenia święta postawiono między innymi bardzo wysoki sosnowy maszt flagowy na którym zawisła flaga amerykańska.',
    },
    {
      8: 'Wielki Kanion, Wielki Kanion Kolorado (ang. Grand Canyon)  przełom rzeki Kolorado w stanie Arizona w USA przez Płaskowyż Kolorado. Za początek kanionu uznaje się Lees Ferry (niewielka stacja z motelem i przystanią dla łodzi leżąca około 12 km od miejscowości Page), natomiast koniec kanionu leży w rejonie Grand Wash Cliff leżącym około 20 km od początku jeziora Mead. Odległość pomiędzy tymi punktami mierzona nurtem rzeki Kolorado wynosi 446 km. Najgłębszym rejonem Wielkiego Kanionu jest Granite Gorge (Wąwóz Granitowy), w którym najgłębsze miejsce leży poniżej krawędzi o 1857 m (6093 stóp). Szerokość kanionu waha się od ok. 800 m (pod punktem widokowym Toroweap na North Rim  Północnej Krawędzi) do 29 km w najszerszym miejscu. Jest to największy przełom rzeki na świecie. Obszar ten stanowi park narodowy Parku Narodowego Wielkiego Kanionu.',
    },
  ];

  public title = 'nabthat-task';
  private radioOption: string = '';
  private switchOption: string = '';
  public output: string[] = [];

  public resetData() {
    localStorage.setItem('data', JSON.stringify(this.startingData));
  }
  public receiveRadio(event: string) {
    this.radioOption = event;
  }
  public receiveSwitch(event: string) {
    this.switchOption = event;
  }
}
