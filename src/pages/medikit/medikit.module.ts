import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedikitPage } from './medikit';
import { PipesModule } from '../../pipes/pipes.module';
import { FabButtonComponent } from '../../components/fab-button/fab-button';

@NgModule({
  declarations: [
    MedikitPage,
    FabButtonComponent
  ],
  imports: [
    IonicPageModule.forChild(MedikitPage),
    PipesModule,
  ],
 
})
export class MedikitPageModule {}
