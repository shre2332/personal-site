import { Component, OnInit } from '@angular/core';
import { Component, Input  } from '@angular/core';
import { Component, Output  } from '@angular/core';
import { Component, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

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
