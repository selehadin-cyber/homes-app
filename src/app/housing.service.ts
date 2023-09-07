import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "https://json-server-one-iota.vercel.app/locations";

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await this.http.get<HousingLocation>(`${this.url}/${id}`).toPromise();
    return data ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
