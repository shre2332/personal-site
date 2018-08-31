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

  public art_collection = [];

  @Input() active : Boolean;

  constructor() {

  }

  ngOnInit() {
    this.art_collection = [
        {src:"assets/imagetest.JPG", title: "face"},
        {src:"assets/imagetest.JPG", title: "kurt"},
        {src:"assets/imagetest.JPG", title: "what"},
        {src:"assets/imagetest.JPG", title: "face"}
       ];
  }

}
