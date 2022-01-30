import { Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appShowIf]'
})
export class ShowIfDirective{
  
  constructor(private tempRef: TemplateRef<any>, private viewCon: ViewContainerRef) { }

  @Input() set appShowIf(condition: boolean) {
   if (!condition) {
     this.viewCon.createEmbeddedView(this.tempRef);
     console.log(condition);
    } else {
     this.viewCon.clear();
     console.log(condition);
    }
  }
}
