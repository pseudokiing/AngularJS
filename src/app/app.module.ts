import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import {FormsModule} from '@angular/forms';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipe } from './filter.pipe';
import { DefaultTypePipe } from './default-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentCardComponent,
    ContentListComponent,
    FilterPipe,
    DefaultTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
