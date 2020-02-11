import { ColumnConfig, DisplayFormat, NumberFormat } from './columnConfig';

export class ColumnDefinitions {
    //individual
   battingBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['rbi', { columnName: 'RBI', headerTooltip: "Runs Batted In"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play"}],
        ]);
    }

  

    battingAdv(): Map<string, ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['avg', { columnName: 'AVG', headerTooltip: "Average", numberFormat:NumberFormat.Decimal}],
            ['slg', { columnName: 'SLG', headerTooltip: "Slugging #", numberFormat:NumberFormat.Decimal}],
            ['obp', { columnName: 'OBP', headerTooltip: "On Base #", numberFormat:NumberFormat.Decimal}],
            ['ops', { columnName: 'OPS', headerTooltip: "On Base # plus Slugging #", numberFormat:NumberFormat.Decimal}],
            ['iso', { columnName: 'ISO', headerTooltip: "Isolated Power", numberFormat:NumberFormat.Decimal}],
            ['babip', { columnName: 'BABIP', headerTooltip: "Batting Average On Balls In Play", numberFormat:NumberFormat.Decimal}],
            ['bbRate', { columnName: 'BBRate', headerTooltip: "Walk Rate", numberFormat:NumberFormat.Decimal}],
            ['kRate', { columnName: 'KRate', headerTooltip: "Strikeout Rate", numberFormat:NumberFormat.Decimal}],
        ]);
    }

    battingPostBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['round', { columnName: 'Round', headerTooltip: "Playoff Round" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['rbi', { columnName: 'RBI', headerTooltip: "Runs Batted In"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play"}],
        ]);
    }

    fieldingBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['pos', { columnName: 'POS', headerTooltip: "Games" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['gs', { columnName: 'GS', headerTooltip: "Games Started" }],
            ['innOuts', { columnName: 'InnOuts', headerTooltip: "Outs Played on Defense" }],
            ['po', { columnName: 'PO', headerTooltip: "Put Outs" }],
            ['a', { columnName: 'A', headerTooltip: "Assists" }],
            ['e', { columnName: 'E', headerTooltip: "Errors" }],
            ['dp', { columnName: 'DP', headerTooltip: "Double Plays" }],
            ['pb', { columnName: 'PB', headerTooltip: "Passed Balls" }],
            ['wp', { columnName: 'WP', headerTooltip: "Wild Pitches"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases Against"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['zr', { columnName: 'ZR', headerTooltip: "Zone Rating"}],
        ]);
    }

    fieldingPostBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['round', { columnName: 'Round', headerTooltip: "Playoff Round"}],
            ['pos', { columnName: 'POS', headerTooltip: "Games" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['gs', { columnName: 'GS', headerTooltip: "Games Started" }],
            ['innOuts', { columnName: 'InnOuts', headerTooltip: "Outs Played on Defense" }],
            ['po', { columnName: 'PO', headerTooltip: "Put Outs" }],
            ['a', { columnName: 'A', headerTooltip: "Assists" }],
            ['e', { columnName: 'E', headerTooltip: "Errors" }],
            ['dp', { columnName: 'DP', headerTooltip: "Double Plays" }],
            ['tp', { columnName: 'TP', headerTooltip: "Triple Plays" }],
            ['pb', { columnName: 'PB', headerTooltip: "Passed Balls" }],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases Against"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
        ]);
    }

    pitchingBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['w', { columnName: 'W', headerTooltip: "Wins" }],
            ['l', { columnName: 'L', headerTooltip: "Losses" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['gs', { columnName: 'GS', headerTooltip: "Games Started" }],
            ['cg', { columnName: 'CG', headerTooltip: "Complete Games" }],
            ['sho', { columnName: 'SHO', headerTooltip: "Shutouts" }],
            ['sv', { columnName: 'SV', headerTooltip: "Saves" }],
            ['ipouts', { columnName: 'IpOuts', headerTooltip: "Outs Pitched" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['er', { columnName: 'ER', headerTooltip: "Earned Runs Allowed"}],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['baopp', { columnName: 'BAOpp', headerTooltip: "Opponents' Batting Average", numberFormat:NumberFormat.Era}],
            ['era', { columnName: 'ERA', headerTooltip: "Earned Run Average", numberFormat:NumberFormat.Decimal}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['wp', { columnName: 'WP', headerTooltip: "Wild Pitches"}],
            ['bk', { columnName: 'BK', headerTooltip: "Balks"}],
            ['bfp', { columnName: 'BFP', headerTooltip: "Batters Faced By Pitcher"}],
            ['gf', { columnName: 'GF', headerTooltip: "Games Finished"}],
            ['r', { columnName: 'R', headerTooltip: "Runs Allowed"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play Induced"}],
        ]);
    }
    
    //leaderboards
    battingBoxLeaderboard(): Map<string,ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['rbi', { columnName: 'RBI', headerTooltip: "Runs Batted In"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play"}],
        ]);
    }
    battingPostLeaderboard(): Map<string,ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['round', { columnName: 'Round', headerTooltip: "Playoff Round" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['rbi', { columnName: 'RBI', headerTooltip: "Runs Batted In"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play"}],
        ]);
    }

    battingAdvLeaderboard(): Map<string, ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['avg', { columnName: 'AVG', headerTooltip: "Average", numberFormat:NumberFormat.Decimal}],
            ['slg', { columnName: 'SLG', headerTooltip: "Slugging #", numberFormat:NumberFormat.Decimal}],
            ['obp', { columnName: 'OBP', headerTooltip: "On Base #", numberFormat:NumberFormat.Decimal}],
            ['ops', { columnName: 'OPS', headerTooltip: "On Base # plus Slugging #", numberFormat:NumberFormat.Decimal}],
            ['iso', { columnName: 'ISO', headerTooltip: "Isolated Power", numberFormat:NumberFormat.Decimal}],
            ['babip', { columnName: 'BABIP', headerTooltip: "Batting Average On Balls In Play", numberFormat:NumberFormat.Decimal}],
            ['bbRate', { columnName: 'BBRate', headerTooltip: "Walk Rate", numberFormat:NumberFormat.Decimal}],
            ['kRate', { columnName: 'KRate', headerTooltip: "Strikeout Rate", numberFormat:NumberFormat.Decimal}],
        ]);
    }

    battingPostAdvLeaderboard(): Map<string, ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['round', { columnName: 'Round', headerTooltip: "Playoff Round", numberFormat:NumberFormat.Decimal}],
            ['avg', { columnName: 'AVG', headerTooltip: "Average", numberFormat:NumberFormat.Decimal}],
            ['slg', { columnName: 'SLG', headerTooltip: "Slugging #", numberFormat:NumberFormat.Decimal}],
            ['obp', { columnName: 'OBP', headerTooltip: "On Base #", numberFormat:NumberFormat.Decimal}],
            ['ops', { columnName: 'OPS', headerTooltip: "On Base # plus Slugging #", numberFormat:NumberFormat.Decimal}],
            ['iso', { columnName: 'ISO', headerTooltip: "Isolated Power", numberFormat:NumberFormat.Decimal}],
            ['babip', { columnName: 'BABIP', headerTooltip: "Batting Average On Balls In Play", numberFormat:NumberFormat.Decimal}],
            ['bbRate', { columnName: 'BBRate', headerTooltip: "Walk Rate", numberFormat:NumberFormat.Decimal}],
            ['kRate', { columnName: 'KRate', headerTooltip: "Strikeout Rate", numberFormat:NumberFormat.Decimal}],
        ]);
    }

    
    pitchingLeaderboard(): Map<string,ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['w', { columnName: 'W', headerTooltip: "Wins" }],
            ['l', { columnName: 'L', headerTooltip: "Losses" }],
            ['era', { columnName: 'ERA', headerTooltip: "Earned Run Average", numberFormat:NumberFormat.Decimal}],
            ['gs', { columnName: 'GS', headerTooltip: "Games Started" }],
            ['cg', { columnName: 'CG', headerTooltip: "Complete Games" }],
            ['sho', { columnName: 'SHO', headerTooltip: "Shutouts" }],
            ['sv', { columnName: 'SV', headerTooltip: "Saves" }],
            ['ipouts', { columnName: 'IpOuts', headerTooltip: "Outs Pitched" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['er', { columnName: 'ER', headerTooltip: "Earned Runs Allowed"}],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['baopp', { columnName: 'BAOpp', headerTooltip: "Opponents' Batting Average", numberFormat:NumberFormat.Decimal}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['wp', { columnName: 'WP', headerTooltip: "Wild Pitches"}],
            ['bk', { columnName: 'BK', headerTooltip: "Balks"}],
            ['bfp', { columnName: 'BFP', headerTooltip: "Batters Faced By Pitcher"}],
            ['gf', { columnName: 'GF', headerTooltip: "Games Finished"}],
            ['r', { columnName: 'R', headerTooltip: "Runs Allowed"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play Induced"}],
        ]);
    }

    //teams
    teamBattingBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['w', { columnName: 'W', headerTooltip: "Wins" }],
            ['l', { columnName: 'L', headerTooltip: "Losses" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
        ]);
    }

    teamPitchingBox(): Map<string,ColumnConfig>{
        return new Map([
            ['yearId', { columnName: "Year" }],
            ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
            ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
            ['w', { columnName: 'W', headerTooltip: "Wins" }],
            ['l', { columnName: 'L', headerTooltip: "Losses" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['cg', { columnName: 'CG', headerTooltip: "Complete Games" }],
            ['sho', { columnName: 'SHO', headerTooltip: "Shutouts" }],
            ['sv', { columnName: 'SV', headerTooltip: "Saves" }],
            ['ipouts', { columnName: 'IpOuts', headerTooltip: "Outs Pitched" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['er', { columnName: 'ER', headerTooltip: "Earned Runs Allowed"}],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['era', { columnName: 'ERA', headerTooltip: "Earned Run Average", numberFormat:NumberFormat.Decimal}],
            ['r', { columnName: 'R', headerTooltip: "Runs Allowed"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
        ]);
    }

    rosterBatting(): Map<string,ColumnConfig>{
        return new Map([
            ['playerId', {columnName: "", displayFormat: DisplayFormat.Photo}],
            ['nameFirst', { columnName: "First Name" }],
            ['nameLast', { columnName: "Last Name" }],
            ['g', { columnName: 'G', headerTooltip: "Games" }],
            ['ab', { columnName: 'AB', headerTooltip: "At Bats" }],
            ['pa', { columnName: 'PA', headerTooltip: "Plate Appearances" }],
            ['h', { columnName: 'H', headerTooltip: "Hits" }],
            ['singles', { columnName: '1B', headerTooltip: "Singles" }],
            ['x2b', { columnName: '2B', headerTooltip: "Doubles" }],
            ['x3b', { columnName: '3B', headerTooltip: "Triples" }],
            ['hr', { columnName: 'HR', headerTooltip: "Homeruns" }],
            ['rbi', { columnName: 'RBI', headerTooltip: "Runs Batted In"}],
            ['bb', { columnName: 'BB', headerTooltip: "Walks"}],
            ['ibb', { columnName: 'IBB', headerTooltip: "Intentional Walks"}],
            ['hbp', { columnName: 'HBP', headerTooltip: "Hit By Pitch"}],
            ['so', { columnName: 'K', headerTooltip: "Strikeouts"}],
            ['sb', { columnName: 'SB', headerTooltip: "Stolen Bases"}],
            ['cs', { columnName: 'CS', headerTooltip: "Caught Stealing"}],
            ['sh', { columnName: 'SH', headerTooltip: "Sacrifice Hits"}],
            ['sf', { columnName: 'SF', headerTooltip: "Sacrifice Flies"}],
            ['gidp', { columnName: 'GIDP', headerTooltip: "Ground Into Double Play"}],
            ['avg', { columnName: 'AVG', headerTooltip: "Average", numberFormat:NumberFormat.Decimal}],
            ['slg', { columnName: 'SLG', headerTooltip: "Slugging #", numberFormat:NumberFormat.Decimal}],
            ['obp', { columnName: 'OBP', headerTooltip: "On Base #", numberFormat:NumberFormat.Decimal}],
            ['ops', { columnName: 'OPS', headerTooltip: "On Base # plus Slugging #", numberFormat:NumberFormat.Decimal}],
            ['iso', { columnName: 'ISO', headerTooltip: "Isolated Power", numberFormat:NumberFormat.Decimal}],
            ['babip', { columnName: 'BABIP', headerTooltip: "Batting Average On Balls In Play", numberFormat:NumberFormat.Decimal}],
            ['bbRate', { columnName: 'BBRate', headerTooltip: "Walk Rate", numberFormat:NumberFormat.Decimal}],
            ['kRate', { columnName: 'KRate', headerTooltip: "Strikeout Rate", numberFormat:NumberFormat.Decimal}],
        ]);
    }
}