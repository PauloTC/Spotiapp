import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      'Authorization': 'Bearer BQD4Jy9sB0osxB6KBfFBX1KUfXhUMpAjI5rsVkGjw3oU4ZWPXXys-4vKVi7-Dyhc3tQoaNrEml8N_G7QF18'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

}
