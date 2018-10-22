import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.success',
  template: `
    <h3>
      Alert : This is a SUCCESS message
    </h3>
  `,
  styles: [`
    h3 {
      color: green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
