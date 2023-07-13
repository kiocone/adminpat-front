import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "menu",
  templateUrl: "menu.component.html",
  styleUrls: ["menu.component.scss"]
})
export class Menu {
  @Output() showMenuBtnEvent: EventEmitter<boolean> = new EventEmitter;

  menuToggle(){
    this.showMenuBtnEvent.emit()
  }
}