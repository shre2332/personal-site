import { Component, OnInit } from '@angular/core';
import { Component, Input  } from '@angular/core';
import { Component, Output  } from '@angular/core';
import { Component, EventEmitter  } from '@angular/core';

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
  
  public  function set_mode(input)
  {
    this.modeEvent.emit(input);
  }

}
