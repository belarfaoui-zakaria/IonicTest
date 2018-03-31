import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterModalPage } from './ajouter-modal';

@NgModule({
  declarations: [
    AjouterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterModalPage),
  ],
})
export class AjouterModalPageModule {}
