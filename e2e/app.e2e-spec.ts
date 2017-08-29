import { EsportPage } from './app.po';

describe('esport App', () => {
  let page: EsportPage;

  beforeEach(() => {
    page = new EsportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
