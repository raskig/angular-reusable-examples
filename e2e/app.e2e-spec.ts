import { AngularReusableExamplesPage } from './app.po';

describe('angular-reusable-examples App', () => {
  let page: AngularReusableExamplesPage;

  beforeEach(() => {
    page = new AngularReusableExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
