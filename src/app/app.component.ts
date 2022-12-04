import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  template: `
  <div>
    <h1>
      <div>
        {{pageTitle}}
        <pm-products></pm-products>
      </div>
    </h1>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string ='Neo Product Management';
}
