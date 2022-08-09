import { Component, Input, OnInit } from '@angular/core';
import { ParentsService } from '../../../services/parents.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Children } from '../../../interfaces/children.interface';
import { switchMap } from 'rxjs';
import { Parent } from '../../../../parents/interfaces/parents.interface';
import { Language } from '../../../interfaces/language.interface';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.scss']
})
export class ChildrensComponent implements OnInit {



  constructor(private parentsService: ParentsService, private router: Router, private route: ActivatedRoute) { }

  childrens: Children[] = [];
  parent!: Parent;
  id!: string;
  language: String = "es_ES";
  errorMessage: any;


  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(({ id }) => this.parentsService.getChildrensByParentId(id))
      )
      .subscribe(childrens => this.childrens = childrens, error => this.errorMessage = error);

    this.route.params
      .pipe(
        switchMap(({ id }) => this.parentsService.getParentById(id))
      )
      .subscribe(parent => this.parent = parent);


    this.route.params
      .subscribe(res => this.id = res['id']);


  }




  regresar() {
    this.router.navigate(['/parents']);
  }


  crear() {
    this.parentsService.createChildren(Number(this.id), "es_ES")
  }

  eliminar(id: string) {
    this.parentsService.deleteNode(Number(id));
    this.parentsService.getParents();
  }

}
