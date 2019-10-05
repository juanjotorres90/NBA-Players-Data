import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }
// headersApi = {

//     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//     'Accept-Encoding': 'gzip, deflate',
//     'Accept-Language': 'en-US,en;q=0.8',
//     'Connection': 'keep-alive',
//     'Host': 'stats.nba.com',
//     'Upgrade-Insecure-Requests': '1',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'

// }

  fetchedData = [];
  playersFetch = [];

  fetchedInfo = [];
  playersInfo = [];

  playerInfo = [];
  // fetchData() {
    // tslint:disable-next-line: max-line-length
  //   return fetch('https://stats.nba.com/stats/leaguedashplayerbiostats?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular%20Season', {headers: this.headerss}
  //   )
  //   .then(response => response.json())
  //   .then(json => {
  //     this.fetchedData = json;
  //     console.log(this.fetchedData);
  //   })
  //   .catch(err => console.log(err));

  // }
// fetchData() {
//   let searchParams = new HttpParams();
//   searchParams = searchParams.append('PerMode', 'Totals');
//   searchParams = searchParams.append('LeagueID', '00');
//   // tslint:disable-next-line: max-line-length
//   return this.http.get<any>('https://stats.nba.com/stats/leaguedashplayerbiostats', {
//     headers: new HttpHeaders({
//           'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//     'Accept-Encoding': 'gzip, deflate',
//     'Accept-Language': 'en-US,en;q=0.8',
//     'Connection': 'keep-alive',
//     'Host': 'stats.nba.com',
//     'Upgrade-Insecure-Requests': '1',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
//     }),
//     params: searchParams,
//       responseType: 'json'
//   })
//   .subscribe(data => console.log(data));



// }


  // fetchData() {
  //   // tslint:disable-next-line: max-line-length
  //   return fetch('https://stats.nba.com/stats/commonplayerinfo?PlayerID=2544', {mode: 'cors'}
  //   )
  //   .then(response => response.json())
  //   .then(json => {
  //     this.fetchedData = json;
  //     console.log(this.fetchedData);
  //   })
  //   .catch(err => console.log(err));

  // }

  fetchData() {
    // tslint:disable-next-line: max-line-length
    return fetch('../../assets/api/leaguedashplayerbiostats.json', {mode: 'cors'}
    )
    .then(response => response.json())
    .then(json => {
      this.fetchedData = json.resultSets[0].rowSet;
      this.fetchedData.forEach(player => this.playersFetch.push(player));
      // console.log(this.playersFetch);
      // console.log(this.fetchedData);

      fetch('../../assets/api/commonallplayers.json', {mode: 'cors'}
    )
    .then(response => response.json())
    .then(j => {
      this.fetchedInfo = j.resultSets[0].rowSet;
      this.fetchedInfo.forEach(player => this.playersInfo.push(player));

      // console.log(this.fetchedInfo);


      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.playersFetch.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let k = 0; k < this.playersInfo.length; k++) {
          if (this.playersFetch[i][0] === this.playersInfo[k][0]) {
            console.log(this.playersInfo[k][1]);

            // this.playersInfo.forEach(player => player.push(this.playerInfo));
            // console.log(this.playerInfo);

          }
        }


}
    });



    })
    .catch(err => console.log(err));
  }
}
