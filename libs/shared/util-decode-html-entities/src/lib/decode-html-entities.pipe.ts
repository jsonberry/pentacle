import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'decodeHtmlEntities',
})
export class DecodeHtmlEntitiesPipe implements PipeTransform {
  constructor(private renderer: Renderer2) {}

  transform(value: string): string {
    const el: HTMLDivElement = this.renderer.createElement('div');
    let decoded: string;

    el.innerHTML = value;
    decoded = el.textContent;
    el.remove();

    return decoded;
  }
}
