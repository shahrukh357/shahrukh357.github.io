import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})
export class AppComponent {
  title = 'app';


  constructor(private previousPage: Location) {

  console.log("App constructor called.")

  }

ngOnInit(){
  
}
goBackToPreviousPage(): any{

    this.previousPage.back();

  }
}
