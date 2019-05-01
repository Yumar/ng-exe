import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor(private dialogService: NbDialogService) {

  }

  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }
}
