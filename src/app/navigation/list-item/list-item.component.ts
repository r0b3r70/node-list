import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  constructor(private state:StateService) { }
  // todo: use type for tree
  @Input() public tree: any;

  public clicked(item: any)  {
    this.state.toggle(item);
  }
}
