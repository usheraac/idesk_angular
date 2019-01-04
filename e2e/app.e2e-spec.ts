import { IdeskPage } from './app.po';

describe('idesk App', function() {
  let page: IdeskPage;

  beforeEach(() => {
    page = new IdeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
