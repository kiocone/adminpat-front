import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { Menu } from "./components/menu/menu.component";
import { MainToolbar } from "./components/toolbar/toolbar.component";
import { PanelComponent } from "./components/panel/panel";
import { RouterModule } from "@angular/router";
import { PanelCard } from "./components/panel-card.component";

@NgModule({
  declarations: [
    MainToolbar,
    Menu,
    PanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PanelCard
  ],
  exports: [
    MaterialModule,
    MainToolbar,
    Menu,
    PanelComponent,
  ]
})
export class SharedModule{}