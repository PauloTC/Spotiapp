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

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQCWj8tFsZukP25WCRH42snEuFnyaPsqR4SpERP-fv4wUbT9VMRgKUaZpl5V3pSUah8CoXottGGu9ITp5w4'
    })

    return this.http.get( url, { headers } )

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items));
  }
  
  getArtist( term: string ){
    return this.getQuery(`search?query=${term}&type=artist&market=PE&offset=0&limit=15`)
    .pipe(  map( data => data['artists'].items));
  }

}
