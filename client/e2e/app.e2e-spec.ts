import { WoFPage } from './app.po';

describe('wo-f App', () => {
  let page: WoFPage;

  beforeEach(() => {
    page = new WoFPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
