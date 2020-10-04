function matchesWonByEachTeam(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      let temp = {};
      for(let m of matches){
          if(season == m.season){
            const winner = m.winner;
            if(temp[winner]){
                temp[winner] += 1;
            }else{
                temp[winner] = 1;
            }
          }
      }
      result[season] = temp;
    }
    return result;
  }
  module.exports = matchesWonByEachTeam;
  