import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatSlideToggleModule
} from "@angular/material";

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatSlideToggleModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {}
