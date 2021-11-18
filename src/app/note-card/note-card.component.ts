/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() starred!: boolean;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  /* static: true taken from => https://www.reddit.com/r/Angular2/comments/d53d17/cannot_read_property_nativeelement_of_undefined/ */
  @ViewChild('truncator', {static: true}) truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: true}) bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
      let style = window.getComputedStyle(this.bodyText.nativeElement, null);
      let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

      if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
          this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
      } else {
          this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
      }
  }

  onXButtonClick() {
	  this.deleteEvent.emit();
  }

}
