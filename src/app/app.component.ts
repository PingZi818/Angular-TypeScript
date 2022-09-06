import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #ref1 [(ngModel)]="firstExample" placeholder="Hero name"/>
    <ng-template [ngIf]="true">
      <span>{{ref1.value}}</span>
    </ng-template>
  `
})
export class AppComponent {
  firstExample = ''
}
