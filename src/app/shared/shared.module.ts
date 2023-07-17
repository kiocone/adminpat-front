import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { Menu } from "./components/menu/menu.component";
import { MainToolbar } from "./components/toolbar/toolbar.component";
import { PanelComponent } from "./components/panel/panel";
import { RouterModule } from "@angular/router";
import { PanelCard } from "./components/panel-card.component";
import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MainToolbar,
    Menu,
    PanelComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    PanelCard,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    MainToolbar,
    Menu,
    PanelComponent,
    NavigationComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule{}