import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ForgotPasswordComponent } from './ForgotPassword.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  forget_dialog() {
    let forgotPasswordRef = this.dialog.open(ForgotPasswordComponent, { disableClose: true, hasBackdrop: true });
    forgotPasswordRef.afterClosed().subscribe(test => {
      if (test)
        console.log("Dialog close");
    });
  }

}
