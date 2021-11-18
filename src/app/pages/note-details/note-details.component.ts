/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-note-details',
	templateUrl: './note-details.component.html',
	styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

	note!: Note;
	noteId!: number;
	new!: boolean;
	starred: boolean = false;

	constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {

		this.route.params.subscribe((params: Params) => {
			this.note = new Note("","",false);
			if (params.id) {
				this.note = this.notesService.get(params.id);
				this.starred = this.note.starred;
				this.noteId = params.id;
				this.new = false;
			}
			else {
				this.new = true;
			}
		});
	}

	toggleStar(){
		this.starred = !this.starred;
	}

	onSubmit(form: NgForm){
		if (this.new){
			/* Where we save the note */
			this.notesService.add(new Note(form.value.title, form.value.body, this.starred));
		} else {
			this.notesService.update(this.noteId, form.value.title, form.value.body, this.starred);
		}
		this.router.navigateByUrl('/');
	}

	onCancel() {
		this.router.navigateByUrl('/');
	}
}
