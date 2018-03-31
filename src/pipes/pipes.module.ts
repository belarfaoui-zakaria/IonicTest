import { NgModule } from '@angular/core';
import { FlterPipe } from './flter/flter';
import { FilterPipe } from './filter/filter';
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
    FlterPipe,
    FilterPipe],
	imports: [CommonModule],
	exports: [
    FlterPipe,FilterPipe ],
})
export class PipesModule {}