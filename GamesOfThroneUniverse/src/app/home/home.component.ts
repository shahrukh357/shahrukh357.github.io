import { Component, OnInit } from '@angular/core';
import { GotHttpservice } from "../got-http.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBooks = [];
  public allCharacters = [];
  public allHouses = [];
  public allItems:any = [];
  errorMessage: any;


  constructor(public gameHttpService:GotHttpservice) { 
    console.log("Home component constructor is called.")
  }

  ngOnInit() {

    console.log("Home component onInit is called.")

    //for books
   this.allBooks = this.gameHttpService.getAllBooks().subscribe(
      
      data => {
        console.log("logging of data");
        console.log(data);
        this.allBooks = data;
        this.allBooks.sort((a, b) => a.name.localeCompare(b.name)); //to sort books alphabetically
        this.allItems = this.allItems.concat(this.allBooks);
        console.log("All the details are:" + this.allItems)
      },
      error =>{
        console.log("some error has occured");
        console.log(error.errorMessage)
      }
    );
    console.log(this.allBooks);

    // for characters
    this.allCharacters = this.gameHttpService.getAllCharacters().subscribe(
      
      data => {
        console.log("logging of  data");
        console.log(data);
        this.allCharacters = data; 
        this.allCharacters.sort((a, b) => a.name.localeCompare(b.name)); //to sort characters alphabetically
        this.allItems = this.allItems.concat(this.allCharacters);
        for(let item of this.allItems) {
          if(item.name==""){
            item.name="Character Name: N/A"
          }
        }
        console.log("All the  details :" + this.allItems)
      },
      error =>{
        console.log("some error has occured");
        console.log(error.errorMessage)
      }
    );
    console.log(this.allCharacters);

    // for houses
    this.allHouses = this.gameHttpService.getAllHouses().subscribe(
      
      data => {
        console.log("logging of data");
        console.log(data);
        this.allHouses = data;
        this.allHouses.sort((a, b) => a.name.localeCompare(b.name)); //to sort houses alphabetically
        this.allItems = this.allItems.concat(this.allHouses);
        console.log("All  the details :" + this.allItems)
        for(let item of this.allItems) {
          if(item.coatOfArms==""){
            item.coatOfArms="N/A"
          }
        }
      },
      error =>{
        console.log("some error has occured");
        console.log(error.errorMessage)
      }
    );
    console.log(this.allHouses);

    
  }


  
  ngOnDestroy(){
    console.log("Home component is destroyed.")
  }

}
