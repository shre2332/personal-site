import { Component, OnInit } from '@angular/core';
import { Component, Input  } from '@angular/core';
import { Component, Output  } from '@angular/core';
import { Component, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

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