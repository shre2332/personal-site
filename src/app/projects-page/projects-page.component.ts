import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { Output} from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
    
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
