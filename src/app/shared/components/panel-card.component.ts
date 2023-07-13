import { Component, Input } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'panel-card',
  styles: [
    '.mat-card {height: 136px;width: 205px;margin: 0px 0 10px;}',
    '.icono {font-size: 60px;height: auto;padding: 30px 75px 0px 75px;color: #00c344;}',
    '.center {margin-top: 10px;text-align: center;text-transform: uppercase;}'
  ],
  template: `
      <mat-card class="mat-card">
        <mat-icon mat-card-image class="icono" mat-list-icon>{{icon}}</mat-icon>
        <mat-card-content class="center">
          {{label}}
        </mat-card-content>
      </mat-card>

  `
})
export class PanelCard {

  @Input() label!: string;
  @Input() icon!: string;
}
