function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  fetchAndVisualizeData();
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
    visualizeStory(data.story);
    visualizeExtraRunByEachTeam(data.extraRunByEachTeam);
    topEconomicalBoweler(data.eco);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "1. Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  
  var teamss = [];
  function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {  
    const seriesData = [];
    let teams = [];
    for (let [key, value] of Object.entries(matchesWonByEachTeam)){
      seriesData.push(key);
      for(let [k, v] of Object.entries(value)){
        if(k.length == 0){
          k = "noResult";
        }
        if(teams.indexOf(k) == - 1){
            teams.push(k);
        }
      }
    }
    teamss.push(...teams);
    const winData = [];
    for (let team of teams) {
      if(team === "noResult"){
        team = "";
      }
      let temp = [];
      for (let [key, value] of Object.entries(matchesWonByEachTeam)) {
        if(value.hasOwnProperty(team)){ 
          for (let [k, v] of Object.entries(value)) {
            if(k === team){
              temp.push(v);
              break;
            }        
          }
        }else{
          temp.push(0);
        }
      }
      winData.push(temp);
    }
    Highcharts.chart("matches-won-by-each-team", {
      chart: {
          type: "column"
      },
      title: {
          text: "2. Matches won by each team over all the years of IPL"
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: seriesData,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: "Matches won"
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [
        {
          name: teams[0],
          data: winData[0]
        },
        {
          name: teams[1],
          data: winData[1]
        },
        {
          name: teams[2],
          data: winData[2]
        },
        {
          name: teams[3],
          data: winData[3]
        },
        {
          name: teams[4],
          data: winData[4]
        },
        {
          name: teams[5],
          data: winData[5]
        },
        {
          name: teams[6],
          data: winData[6]
        },
        {
          name: teams[7],
          data: winData[7]
        },
        {
          name: teams[8],
          data: winData[8]
        },
        {
          name: teams[9],
          data: winData[9]
        },
        {
          name: teams[10],
          data: winData[10]
        },
        {
          name: teams[11],
          data: winData[11]
        },
        {
          name: teams[12],
          data: winData[12]
        },
        {
          name: teams[13],
          data: winData[13]
        },
        {
          name: teams[14],
          data: winData[14]
        },
        {
          name: teams[15],
          data: winData[15]
        }
    ]});
  }
  
  function visualizeStory(story) {
    const stadium = [];
    for (let [key, value] of Object.entries(story)){
      stadium.push(key);
    }
    const winData = [];
    for (let team of teamss) {
      if(team === "noResult"){
        team ="";
      }
      let temp = [];
      for (let [key, value] of Object.entries(story)) {
        if(value.hasOwnProperty(team)){ 
          for (let [k, v] of Object.entries(value)) {
            if(k === team){
              temp.push(v);
              break;
            }        
          }
        }else{
          temp.push(0);
        }
      }
      winData.push(temp);
    }
    Highcharts.chart("story", {
      chart: {
          type: 'bar'
      },
      title: {
          text: '5. Story: Matches won by each team per venue'
      },
      subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: stadium
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches won vs Stadium'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [
        {
          name: teamss[0],
          data: winData[0]
        },
        {
          name: teamss[1],
          data: winData[1]
        },
        {
          name: teamss[2],
          data: winData[2]
        },
        {
          name: teamss[3],
          data: winData[3]
        },
        {
          name: teamss[4],
          data: winData[4]
        },
        {
          name: teamss[5],
          data: winData[5]
        },
        {
          name: teamss[6],
          data: winData[6]
        },
        {
          name: teamss[7],
          data: winData[7]
        },
        {
          name: teamss[8],
          data: winData[8]
        },
        {
          name: teamss[9],
          data: winData[9]
        },
        {
          name: teamss[10],
          data: winData[10]
        },
        {
          name: teamss[11],
          data: winData[11]
        },
        {
          name: teamss[12],
          data: winData[12]
        },
        {
          name: teamss[13],
          data: winData[13]
        },
        {
          name: teamss[14],
          data: winData[14]
        },
        {
          name: teamss[15],
          data: winData[15]
        }
      ]});
  }
  
  function visualizeExtraRunByEachTeam(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
    Highcharts.chart("extra-run-by-each-team", {
      chart: {
        type: "column"
      },
      title: {
        text: "3. Extra runs concede by each team in 2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Extra Runs",
          data: seriesData
        }
      ]
    });
  }
  
  function topEconomicalBoweler(eco) {
    let seriesData = [];
    for (let e in eco) {
      seriesData.push([e, eco[e]]);
    }
    seriesData.sort(function(a, b){
      return a[1] - b[1];
    });
    let ecoData = seriesData.slice(0, 10);
    Highcharts.chart("bowler-with-economy-rate", {
      chart: {
        type: "column"
      },
      title: {
        text: "4. Top economical bowlers in 2015 Season"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Economy rate",
          data: ecoData
        }
      ]
    });
  }
  