import { async, TestBed } from '@angular/core/testing';
import { SharedUtilBypassSecurityTrustHtmlModule } from './shared-util-bypass-security-trust-html.module';

describe('SharedUtilBypassSecurityTrustHtmlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilBypassSecurityTrustHtmlModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilBypassSecurityTrustHtmlModule).toBeDefined();
  });
});
