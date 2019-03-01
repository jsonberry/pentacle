import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { rem } from '@pentacle/shared/util-style-framework';

@Directive({
  selector: '[pentacleGhostImage]',
})
export class GhostImageDirective {
  @HostBinding('style.height') imageHeight;

  @HostBinding('style.width') imageWidth;

  @HostBinding('style.opacity') opacity = 0;

  @HostBinding('style.transition') transition = 'all 300ms';

  @Input()
  set ghostImageSize(size) {
    this.imageHeight = this.imageWidth = rem(size);
  }

  @HostListener('load', ['$event'])
  load(e) {
    this.opacity = 1;
  }
}
