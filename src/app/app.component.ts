import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode: Boolean[] = [true,false,false,false,false,false,false,false,false];
  
  set_mode(input)
  {
    for (var i =0; i < this.mode.length; i++)
    {
      if (i == Number(input))
      {
        this.mode[i] = true;
      }
      else
      {
        this.mode[i] = false;
      }
    }
  }
}
