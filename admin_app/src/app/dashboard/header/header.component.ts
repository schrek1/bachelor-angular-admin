import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .app-logo{
      max-height: 130px;
      margin: 15px 0;
    }
`]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
