import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecodeHtmlEntitiesPipe } from './decode-html-entities.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DecodeHtmlEntitiesPipe],
  exports: [DecodeHtmlEntitiesPipe],
})
export class SharedUtilDecodeHtmlEntitiesModule {}
