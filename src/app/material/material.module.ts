import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule
} from "@angular/material";

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {}
