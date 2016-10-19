import { PalsPage } from './app.po';

describe('pals App', function() {
  let page: PalsPage;

  beforeEach(() => {
    page = new PalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
