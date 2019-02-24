import { DecodeHtmlEntitiesPipe } from './decode-html-entities.pipe';

describe('DecodeHtmlEntitiesPipe', () => {
  it('create an instance', () => {
    const pipe = new DecodeHtmlEntitiesPipe();
    expect(pipe).toBeTruthy();
  });
});
