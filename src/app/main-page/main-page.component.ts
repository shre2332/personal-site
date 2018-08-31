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

  constructor() { }

  ngOnInit() {
  }
  
  set_mode(input)
  {
    this.modeEvent.emit(input);
  }

}
