import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RadiosComponent } from './radios/radios.component';
import { SwitchesComponent } from './switches/switches.component';
import { OutputComponent } from './output/output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RadiosComponent,
    SwitchesComponent,
    OutputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
