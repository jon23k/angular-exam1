import { AngularExam1Page } from './app.po';

describe('angular-exam1 App', () => {
  let page: AngularExam1Page;

  beforeEach(() => {
    page = new AngularExam1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
