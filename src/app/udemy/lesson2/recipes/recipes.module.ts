import { LazyComponent } from './../../lesson10/lazy/lazy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';

@NgModule({
    declarations: [LazyComponent],
    imports: [CommonModule, AppRoutingModule],
    exports: [AppRoutingModule]
})
export class RecipeModule {

}
