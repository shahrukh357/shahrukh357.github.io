import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import'rxjs/add/operator/catch';
//import'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class GotHttpservice {

  public allBooks;
  public allCharacters;
  public allHouses;
  public allItems;
  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {

      console.log("GotHttpService is called.")
   }

   //exception handler
   private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBooks(): any {
    
    let bookResponse = this._http.get(this.baseUrl + '/books')
    console.log(bookResponse)
    return bookResponse;
  }// end get all books 

  public getAllCharacters(): any {
  
    let characterResponse = this._http.get(this.baseUrl + '/characters')
    console.log(characterResponse)
    return characterResponse;
  }// end get all characters

  public getAllHouses(): any {
  
    let houseResponse = this._http.get(this.baseUrl + '/houses')
    console.log(houseResponse)
    return houseResponse;
  }// end get all houses

  public getSingleBookInfo(bookId): any{
    let myResponse1 = this._http.get(this.baseUrl + '/books' + '/' + bookId)
    return myResponse1;
  }//end get single Book info

  public getSingleCharacterInfo(characterId): any{
    let myResponse2 = this._http.get(this.baseUrl + '/characters' + '/' + characterId)
    return myResponse2;
  }//end get single character info

  public getSingleHouseInfo(houseId): any{
    let myResponse3 = this._http.get(this.baseUrl + '/houses' + '/' + houseId)
    return myResponse3;
  }//end get single house info
  
}
