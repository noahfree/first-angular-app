/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  	providedIn: 'root'
})
export class NotesService {

	notes: Note[] = new Array<Note>();

  	constructor() { }

	getAll(){
		return this.notes;
	}

	get(id: number){
		return this.notes[id];
	}

	getId(note: Note){
		return this.notes.indexOf(note);
	}

	add(note: Note){
		/* adds a note to the notes array and returns id of the note, where id = index */
		let newLength = 0;
		note.starred ? (newLength = this.notes.unshift(note)) : (newLength = this.notes.push(note));
		// let newLength = this.notes.push(note);
		let index = newLength - 1;
		return index;
	}

	update(id: number, title: string, body: string, starred: boolean){
		let note = this.notes[id];
		note.title = title;
		note.body = body;
		if (note.starred != starred){
			this.delete(id);
			note.starred = starred;
			this.add(note);
		} else {
			note.starred = starred;
		}
	}

	delete(id: number){
		this.notes.splice(id, 1);
	}
}
