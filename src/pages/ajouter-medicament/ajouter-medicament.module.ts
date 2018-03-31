import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterMedicamentPage } from './ajouter-medicament';

@NgModule({
  declarations: [
    AjouterMedicamentPage
  ],
  imports: [
    IonicPageModule.forChild(AjouterMedicamentPage),
  ],
})
export class AjouterMedicamentPageModule {}
