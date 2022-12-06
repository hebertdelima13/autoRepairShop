import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button type="button" class="btn buttons px-4">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
