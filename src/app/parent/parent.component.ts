import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Listă URL-uri adăugate:</h2>
    <ul>
      <li *ngFor="let url of listaURL">
        {{ url }}
        <img [src]="url" alt="Imagine" *ngIf="isImageURL(url)" />
      </li>
    </ul>
    <app-child (urlAdaugat)="adaugaInLista($event)"></app-child>
  `,
})
export class ParentComponent {
  listaURL: string[] = [];

  adaugaInLista(url: string) {
    this.listaURL.push(url);
  }

  isImageURL(url: string): boolean {
    // Verificăm dacă URL-ul se termină cu o extensie de imagine
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  }
}
