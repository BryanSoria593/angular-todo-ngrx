import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericInformationComponent } from '../components/dialogs/generic-information/generic-information.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialogGeneric(title: string, logo: string, color: string) {
    const dialogRef = this.dialog.open(GenericInformationComponent, {
      width: '350px',
      data: { title: title, logo: logo, color: color }
    });
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
}
