import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  /* 
    Basic state service to keep track of selected items
    Could be replaced by a more sophisticated state management solution like ngrx if needed.
    Required because of the recursive usage of list-item component. 
  */
  private readonly _state:number[] = [];

  public state(): number[] {
    return this._state;
  }

  public toggle(key: number): void {
    if (this._state.includes(key)) {
      this._state.splice(this._state.indexOf(key), 1)
    } else {
      this._state.push(key)
    }
  }

}
