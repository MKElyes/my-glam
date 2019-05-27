import { Component, OnInit, } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component implements OnInit {
  data;
  
  constructor( private configService: ConfigService) {
 
   }
  

  ngOnInit() {
    this.configService.getapi().subscribe((json: any) => {
      this.data=json.data;
    console.log(this.data);
    }
    );
  }

}


