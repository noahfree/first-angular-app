/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

export class Note {
	public title!: string;
	public body!: string;
	public starred!: boolean;

	constructor(title: string, body: string, starred: boolean){
		this.title = title;
		this.body = body;
		this.starred = starred;
	}
}
