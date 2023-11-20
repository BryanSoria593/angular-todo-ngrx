import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-information',
  templateUrl: './generic-information.component.html',
})
export class GenericInformationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GenericInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

}
