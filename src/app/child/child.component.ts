import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <label>Introdu un URL:</label>
    <input [(ngModel)]="urlInput" />
    <button (click)="adaugaURL()">Adaugă URL</button>
  `,
})
export class ChildComponent {
  urlInput: string = '';

  @Output() urlAdaugat: EventEmitter<string> = new EventEmitter<string>();

  adaugaURL() {
    if (this.urlInput.trim() !== '') {
      this.urlAdaugat.emit(this.urlInput);
      this.urlInput = '';
    }
  }
}
