function extraRunByEachTeam(deliveries, matches){
    const result = {};
    for (const match of matches) {
        if(match.season === "2016"){
            for (let i = 0; i < deliveries.length; i++) {
                if (deliveries[i].match_id === match.id && deliveries[i].is_super_over === "0") {
                    if(result[deliveries[i].bowling_team]){
                        result[deliveries[i].bowling_team] += parseInt(deliveries[i].extra_runs);
                    }else{
                        result[deliveries[i].bowling_team] = parseInt(deliveries[i].extra_runs);
                    }
                }              
            }
        }
    }
    return result;
}
module.exports = extraRunByEachTeam;