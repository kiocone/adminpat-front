import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "main-toolbar",
  templateUrl: "toolbar.component.html",
  styleUrls: ["toolbar.component.scss"]
})
export class MainToolbar {

  @Output() showMenuBtnEvent: EventEmitter<boolean> = new EventEmitter;

  constructor(
  ){
  }

  showMenuBtnOnClick(){
    this.showMenuBtnEvent.emit()
  }
}