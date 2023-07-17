import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

type toastType = 'info' | 'success' | 'warning' | 'danger';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private defaultDuration: number = 5000;
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private horizontalPosition: MatSnackBarHorizontalPosition = 'left';

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  open(body: string, type: toastType = 'info') {
    let options = this.getOptionsByType(type);
    console.log(options)
    this._snackBar.open(body, 'Cerrar', options);
  }

  private getDefaultOptions() {
    return {
      duration: this.defaultDuration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['toast-snackbar', 'info']
    };
  }

  private getOptionsByType(type: toastType) {
    let options = this.getDefaultOptions();

    switch (type) {
      case 'info':
        options.panelClass = ['toast-snackbar', 'info'];
        break;    
      
      case 'success':
        options.panelClass = ['toast-snackbar', 'success'];
        break;
      
      case 'warning':
        options.panelClass = ['toast-snackbar', 'warning'];
        break;
      
      case 'danger':
        options.duration = 0;
        options.panelClass = ['toast-snackbar', 'danger'];
        break;
        
      default:
        break;
    }
    return options;
  }
}