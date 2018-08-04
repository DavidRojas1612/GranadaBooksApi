import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { BookComponent } from './components/pages/book/book.component';
import { NewbookComponent } from './components/pages/newbook/newbook.component';
import { BOOK_ROUTES } from './components/pages/book/book.routes';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'book/new', component: NewbookComponent },
    { path: 'book/:id', component: BookComponent, children: BOOK_ROUTES },
    { path: '**', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}