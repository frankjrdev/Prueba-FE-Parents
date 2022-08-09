import { Component, OnInit, ViewChild } from '@angular/core';
import { Parent } from '../../interfaces/parents.interface';
import { ParentsService } from '../../services/parents.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parents: Parent[] = [];

  constructor(private parentsService: ParentsService) { }

  ngOnInit(): void {

    this.parentsService.getParents()
      .subscribe(parent => this.parents = parent);
  }


}
