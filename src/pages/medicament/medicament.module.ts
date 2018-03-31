import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentPage } from './medicament';

@NgModule({
  declarations: [
    MedicamentPage, 
  ],
  imports: [
    IonicPageModule.forChild(MedicamentPage), 
  ],
})
export class MedicamentPageModule {}
