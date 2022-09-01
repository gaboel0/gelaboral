import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NavComponent } from './nav/nav.component';
import { BlockComponent } from './block/block.component';
import { AudioComponent } from './audio/audio.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlockComponent,
    AudioComponent,
    SchedulingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
