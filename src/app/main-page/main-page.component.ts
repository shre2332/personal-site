import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { Output} from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Input() active:Boolean;
  @Output() modeEvent = new EventEmitter();
  hover1=false;
  hover2=false;
  hover3=false;
  hover4=false;
  hover5=false;
  hover6=false;

  constructor() { }

  ngOnInit() {
    this.hover1=false;
    this.hover2=false;
    this.hover3=false;
    this.hover4=false;
    this.hover5=false;
    this.hover6=false;
  }
  
  set_mode(input)
  {
    this.hover1=false;
    this.hover2=false;
    this.hover3=false;
    this.hover4=false;
    this.hover5=false;
    this.hover6=false;
    this.modeEvent.emit(input);
  }

}
