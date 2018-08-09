//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app.routes';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/pages/search/search.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { NewbookComponent } from './components/pages/newbook/newbook.component';
import { BookComponent } from './components/pages/book/book.component';
import { BookEditComponent } from './components/pages/book/book-edit/book-edit.component';
import { ToggleshowDirective } from './directives/toggleshow.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    InicioComponent,
    NewbookComponent,
    BookComponent,
    BookEditComponent,
    ToggleshowDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
