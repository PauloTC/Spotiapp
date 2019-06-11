import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { 
    console.log('Spotify Service Listos')
  }

  getNewReleases() {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQBToHyzng0ur-gv7a8wf14HThEvZbVI7MpANTwbRj4vQOz-ElFVeBlEZL_KUq1uZ0e170CngBLk9uY_v1_ok6r4ijCxrISAJg9d41ZPHLOBkCsndX7D9jlO_EI7fxe0kFgux-izjRU-h1l8JSxvhfnLcSlztKvP1pWkNA'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
                    .pipe( map( data => data['albums'].items));
    
  }
  
  getArtist( term: string ){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBToHyzng0ur-gv7a8wf14HThEvZbVI7MpANTwbRj4vQOz-ElFVeBlEZL_KUq1uZ0e170CngBLk9uY_v1_ok6r4ijCxrISAJg9d41ZPHLOBkCsndX7D9jlO_EI7fxe0kFgux-izjRU-h1l8JSxvhfnLcSlztKvP1pWkNA'
    })
    return this.http.get(`https://api.spotify.com/v1/search?query=${term}&type=artist&market=PE&offset=0&limit=15`, { headers })
                    .pipe(  map( data => data['artists'].items));
  }

}
