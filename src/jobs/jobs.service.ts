import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

@Injectable()
export class JobsService {
  private readonly API_URL = 'https://jobicy.p.rapidapi.com/api/v2/remote-jobs';
  private readonly API_KEY = process.env.RAPIDAPI_KEY;

  constructor(private readonly httpService: HttpService) {}

  getRemoteJobs(): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': this.API_KEY,
      'X-RapidAPI-Host': 'jobicy.p.rapidapi.com', // Replace with actual RapidAPI host
    };

    return this.httpService
      .get(this.API_URL, { headers })
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
