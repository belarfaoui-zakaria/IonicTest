import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMedicamentPage } from './edit-medicament';

@NgModule({
  declarations: [
    EditMedicamentPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMedicamentPage),
  ],
})
export class EditMedicamentPageModule {}
