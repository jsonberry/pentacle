import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as https from 'https';
import { from, Observable } from 'rxjs';

export class HttpService {
  private instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false // this helps get around self signed cert validation errors in Node
    })
  });

  public get(
    url: string,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse> {
    return from(this.instance.get(url, config));
  }

  public head(
    url: string,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse> {
    return from(this.instance.head(url, config));
  }
}
