import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { CopycodeComponent } from './copycode/copycode.component';
import { SearchwordComponent } from './searchword/searchword.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dynamicComponent: any;

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) 
  container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  // Load using NgComponentOutlet
  CopyCodeComponent() {
    this.container.clear();  // Clear any component loaded using ViewContainerRef
    this.dynamicComponent = CopycodeComponent;
  }

  // Load using ViewContainerRef
  SearchWordComponent() {
    this.dynamicComponent = null;  // Clear any component loaded using NgComponentOutlet
    this.container.clear();  // Clear the previous component
    const componentFactory = this.resolver.resolveComponentFactory(SearchwordComponent);
    this.container.createComponent(componentFactory);
  }
}