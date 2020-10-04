function topEconomicalBowler(deliveries, matches){
    const runs = {};
    const balls = {};
    for (const match of matches) {
        if(match.season === "2015"){
            for (let i = 0; i < deliveries.length; i++) {
                if (deliveries[i].match_id === match.id && deliveries[i].is_super_over === "0") {
                    if(runs[deliveries[i].bowler]){
                        runs[deliveries[i].bowler] += parseInt(deliveries[i].total_runs);// -
                            // (parseInt(deliveries[i].legbye_runs) + parseInt(deliveries[i].bye_runs));
                    }else{
                        runs[deliveries[i].bowler] = parseInt(deliveries[i].total_runs);// -
                            // (parseInt(deliveries[i].legbye_runs) + parseInt(deliveries[i].bye_runs));
                    }
                    if(deliveries[i].wide_runs === "0" && deliveries[i].noball_runs === "0"){
                        if(balls[deliveries[i].bowler]){
                            balls[deliveries[i].bowler] += 1;
                        }else{
                            balls[deliveries[i].bowler] = 1;
                        }
                    }
                }              
            }
        }
    }
    const eco = {};
    for (let [key, value] of Object.entries(runs)) {
        for (let [k, v] of Object.entries(balls)) {
            if(key === k){
                eco[key] = parseFloat((value / (v / 6)).toFixed(2));
            }
        }
    }
    return eco;
}
module.exports = topEconomicalBowler;