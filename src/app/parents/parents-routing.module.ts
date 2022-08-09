import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ChildrensComponent } from './pages/components/childrens/childrens.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add', component: AgregarComponent },
    { path: 'children/show/:id', component: ChildrensComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class ParentsRoutingModule { }