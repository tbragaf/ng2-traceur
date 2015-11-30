import { Component, View, ElementRef } from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html'
})
export class App {
  constructor(elementRef : ElementRef) {
    this.elementRef = elementRef;
  }
}
