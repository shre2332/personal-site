import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-modal',
  templateUrl: './art-modal.component.html',
  styleUrls: ['./art-modal.component.css']
})
export class ArtModalComponent implements OnInit {

  showModal : Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  open_modal()
  {
    //alert("in show modal");
    this.showModal = true;
  }

}
