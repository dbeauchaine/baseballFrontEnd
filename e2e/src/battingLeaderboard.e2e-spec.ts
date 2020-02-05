import { BattingLeaderboard } from './battingLeaderboard.po';
import { browser, logging } from 'protractor';

describe('Batting Leaderboard page tests', () => {
  let page: BattingLeaderboard;
  beforeEach(() => {
    page = new BattingLeaderboard();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Batting Leaderboard By Year');
  });

  it('should render first players first name on regular season box table', () => {
    page.navigateTo();
    expect(page.getRegularSeasonBoxTable().getCellContent('nameFirst', 1)).toEqual('Jose');
  })

  it('should render first players first name on regular season advanced table', () => {
    page.navigateTo();
    expect(page.getRegularSeasonAdvancedTable().getCellContent('nameFirst', 1)).toEqual('Jose');
  })

  it('should render first players first name on post season box table', () => {
    page.navigateTo();
    expect(page.getPostSeasonBoxTable().getCellContent('nameFirst', 1)).toEqual('Ronald');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
