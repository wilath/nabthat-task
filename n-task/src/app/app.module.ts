import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RadiosComponent } from './radios/radios.component';
import { SwitchesComponent } from './switches/switches.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AlphabetSortPipe } from './shared/alphabet-sort.pipe';
import { ApplicationDataService } from './services/application-data.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RadiosComponent,
    SwitchesComponent,
    DisplayComponent,
    EditComponent,
    AlphabetSortPipe
  ],
  imports: [HttpClientModule, CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NgxWebstorageModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [
    ApplicationDataService,

  ]
})
export class AppModule {}
