import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { Output} from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.css']
})
export class ArtPageComponent implements OnInit {

  //MyArrayType = Array<{id: number, text: string}>;

  /*arr: MyArrayType = [
      {id: 1, text: 'Sentence 1'},
      {id: 2, text: 'Sentence 2'},
      {id: 3, text: 'Sentence 3'},
      {id: 4, text: 'Sentenc4 '},
  ];*/

  @Input() active : Boolean;

  constructor() {
    //alert(MyArrayType);
  }

  ngOnInit() {
    //alert("ng sucks big");
    /*this.art_collection = [
        {src:"assets/imagetest.JPG", title: "face"},
        {src:"assets/imagetest.JPG", title: "kurt"},
        {src:"assets/imagetest.JPG", title: "what"},
        {src:"assets/imagetest.JPG", title: "face"}
       ];*/
  }

}
