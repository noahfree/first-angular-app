/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: NotesListComponent},
    { path: 'new', component: NoteDetailsComponent},
	{ path: ':id', component: NoteDetailsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
