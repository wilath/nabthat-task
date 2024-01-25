import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RadiosComponent } from './radios/radios.component';
import { SwitchesComponent } from './switches/switches.component';
import { OutputComponent } from './output/output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AlphabetSortPipe } from './shared/alphabet-sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RadiosComponent,
    SwitchesComponent,
    OutputComponent,
    EditComponent,
    AlphabetSortPipe,
    
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
