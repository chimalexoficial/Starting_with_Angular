import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test.component';
import { SearchingButtonComponent } from './searching-button.component';
import { InputHijoComponent } from './input-hijo/input-hijo.component';
import { InputpadreComponent } from './inputpadre/inputpadre.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    SearchingButtonComponent,
    InputHijoComponent,
    InputpadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
