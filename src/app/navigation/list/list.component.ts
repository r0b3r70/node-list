import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  constructor(private state:StateService) { }

  @Input() tree: any;

  public selected: number[] = this.state.state();
  
}
