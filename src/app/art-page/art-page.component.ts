import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.css']
})
export class ArtPageComponent implements OnInit {

  public art_collection = [];

  active : Boolean = true;

  constructor() {

  }

  ngOnInit() {
    art_collection = [
        {src:"assets/imagetest.JPG", title: "face"},
        {src:"assets/imagetest.JPG", title: "kurt"},
        {src:"assets/imagetest.JPG", title: "what"},
        {src:"assets/imagetest.JPG", title: "face"}
       ];
  }

}
