import { Component } from '@angular/core';
import { PiService } from '../services/pi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private piService: PiService) { }

  sayHello() {
    console.log("in");
    
    this.piService.runHello().subscribe(() => {
      console.log("done");

    })
  }

}
