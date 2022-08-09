import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ParentsRoutingModule } from './parents-routing.module';
import { ParentCardComponent } from './pages/components/parent-card/parent-card.component';
import { ParentComponent } from './pages/components/parent/parent.component';
import { ChildrensComponent } from './pages/components/childrens/childrens.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    ParentCardComponent,
    ParentComponent,
    ChildrensComponent,
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule
  ]
})
export class ParentModule { }
