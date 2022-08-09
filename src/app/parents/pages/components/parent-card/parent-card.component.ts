import { Component, Input, OnInit } from '@angular/core';
import { Parent } from '../../../interfaces/parents.interface';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent {

  @Input() parent!: Parent;


}
