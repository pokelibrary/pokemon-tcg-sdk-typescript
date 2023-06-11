import * as axios from 'axios';
import { IParameter } from './interfaces/IParameter';

export class Client {
  private readonly POKEMONTCG_API_BASE_URL: string =
    'https://api.pokemontcg.io';
  private readonly POKEMONTCG_API_VERSION: string = '2';
  private readonly POKEMONTCG_API_URL: string = `${this.POKEMONTCG_API_BASE_URL}/v${this.POKEMONTCG_API_VERSION}`;
  private readonly POKEMONTCG_API_KEY?: string = process.env.POKEMONTCG_API_KEY;

  private static instance: Client;

  //   private constructor() {}

  public static getInstance(): Client {
    if (!Client.instance) {
      Client.instance = new Client();
    }

    return Client.instance;
  }

  async get<T>(resource: string, params?: IParameter | string): Promise<T> {
    let url = `${this.POKEMONTCG_API_URL}/${resource}`;

    const headers: { [key: string]: string } = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    };

    if (this.POKEMONTCG_API_KEY) {
      headers['X-Api-Key'] = this.POKEMONTCG_API_KEY;
    }

    const config: axios.AxiosRequestConfig = {
      headers,
    };

    if (typeof params === 'string') {
      url += `/${params}`;
    } else if (params) {
      url += `?${this._stringify(params)}`;
    }

    return axios.default
      .get<T>(url, config)
      .then((response) => {
        const { data } = response;

        if (data) {
          const responseKeys: string[] = Object.keys(data);

          return (data as { [key: string]: T })[responseKeys[0]];
        }

        return {} as T;
      })
      .catch((error) => Promise.reject(error));
  }

  private _stringify(params: IParameter): string {
    const queryString = Object.keys(params)
      .map(
        (key: string) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            params[key as keyof IParameter] || '',
          )}`,
      )
      .join('&');

    return queryString;
  }
}
