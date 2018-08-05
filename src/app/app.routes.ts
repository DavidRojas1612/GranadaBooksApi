import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { BookComponent } from './components/pages/book/book.component';
import { NewbookComponent } from './components/pages/newbook/newbook.component';
import { BOOK_ROUTES } from './components/pages/book/book.routes';
import { BookEditComponent } from 'src/app/components/pages/book/book-edit/book-edit.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'book/new', component: NewbookComponent },
    { path: 'book/search/:title', component: SearchComponent },
    { path: 'book/:id', component: BookComponent },
    { path: 'book/:id/edit', component: BookEditComponent },
    { path: '**', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
