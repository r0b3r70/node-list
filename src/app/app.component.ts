import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  /* Parent component handles the data fetching and transformation
   */
  // TODO: add type to the recursive tree structure
  public tree$: Observable<any> = this.api.getData$().pipe(map((data) => this.createTree(data)));

  constructor(private api: ApiService) {}

  // TODO: 
  // - add return type
  // - add types instead of any
  /* Custom mapper. Could be moved elsewhere for reusability and more overview.
     For simplicity, the mapper is kept here.
  */
  private createTree(data: any) {
    const nodeMap = new Map();
    const tree: any = [];

    /* Create first nodes
     */
    data.folders.data.forEach(([id, title]: [number, string]) => {
      nodeMap.set(id, { id, title, children: [] });
    });

    /*  Add child nodes to parent nodes.
        This step could be combined with the previous one given the current dataset, 
        however, it would break if the parent node was not created before the child node.
    */
    data.folders.data.forEach(([id, , parentId]: [number, null, number]) => {
      const node = nodeMap.get(id);
      node && parentId === null
        ? tree.push(node)
        : nodeMap.get(parentId).children.push(node);
    });

    /* Add items to folders
     */
    data.items.data.forEach(
      ([id, title, folderId]: [number, string, number]) => {
        const node = nodeMap.get(folderId);
        node.children.push({ id, title });
      }
    );

    /* Sort items alphabetically
     */
    nodeMap.forEach((node) => {
      node.children.sort((a: any, b: any) => a.title.localeCompare(b.title));
    });

    return tree;
  }
}
