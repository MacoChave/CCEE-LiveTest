import { NgModule } from "@angular/core";

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  exports: [AngularFireAuthModule, AngularFirestoreModule],
  imports: [AngularFireAuthModule, AngularFirestoreModule]
})
export class FirebaseModule {}
