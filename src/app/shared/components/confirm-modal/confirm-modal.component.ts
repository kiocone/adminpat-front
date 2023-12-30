import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalData } from '../../interfaces/modals';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private dialogRef: MatDialogRef<ConfirmModalComponent>
  ) { }

  onConfirm() {
    this.dialogRef.close({confirm: true});
  }

  /* onCancel() {
    this.dialogRef.close(false);
  } */
}
