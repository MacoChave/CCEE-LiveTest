import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatButton,
  MatButtonModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class MaterialModule {}
