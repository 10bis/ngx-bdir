import { Directive, OnInit, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Direction, Position } from './b-dir.models';
import { BDirService } from './b-dir.service';

@Directive({
  selector: '[bdir]'
})
export class BDirDirective implements OnInit, OnDestroy {
  @Input() bdir: Position = Position.Start;

  private dirSubscription: Subscription;

  constructor(private directionService: BDirService, private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.dirSubscription = this.getSubscription().subscribe(dir => {
      this.renderer.setAttribute(this.element.nativeElement, 'dir', dir);
    });
  }

  public ngOnDestroy(): void {
    this.dirSubscription.unsubscribe();
  }

  private getSubscription() {
    return this.bdir === Position.Start ? this.directionService.getDir$() : this.directionService.getOppositeDir$();
  }
}
