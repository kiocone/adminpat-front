import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminpat-front';

  showMenu!: boolean;

  showMenuEvent(event: boolean){
    this.showMenu = event
    console.log(this.showMenu)
  }
}
