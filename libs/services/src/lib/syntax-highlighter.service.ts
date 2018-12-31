import { Injectable } from '@angular/core';

import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-typescript';

declare var Prism: any;

@Injectable({
  providedIn: 'root',
})
export class SyntaxHighlighterService {
  highlightAll(): void {
    Prism.highlightAll();
  }

  convertReservedHTMLEntities(str: string) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\’/g, '&apos;');
  }
}
