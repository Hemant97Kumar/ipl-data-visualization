function story(matches){
    const result = {};
    for (let match of matches) {
      const venue = match.venue;
      let temp = {};
      for(let m of matches){
          if(venue === m.venue){
            const winner = m.winner;
            if(temp[winner]){
                temp[winner] += 1;
            }else{
                temp[winner] = 1;
            }
          }
      }
      result[venue] = temp;
    }
    return result;
}
module.exports = story;