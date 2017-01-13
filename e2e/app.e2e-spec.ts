import { DaylightIndustriesPage } from './app.po';

describe('daylight-industries App', function() {
  let page: DaylightIndustriesPage;

  beforeEach(() => {
    page = new DaylightIndustriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
