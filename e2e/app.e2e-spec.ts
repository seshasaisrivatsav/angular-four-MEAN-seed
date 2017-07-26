import { AngularFourMEANSeedPage } from './app.po';

describe('angular-four-mean-seed App', () => {
  let page: AngularFourMEANSeedPage;

  beforeEach(() => {
    page = new AngularFourMEANSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
