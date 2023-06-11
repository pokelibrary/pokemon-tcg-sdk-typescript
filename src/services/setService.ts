import { Client } from '../client';
import { IParameter } from '../interfaces/IParameter';
import { ISet } from '../interfaces/ISet';

export async function findSetByID(id: string): Promise<ISet> {
    const client: Client = Client.getInstance();
    const response: ISet = await client.get<ISet>('sets', id);
    return response;
}

export async function findSetsByQueries(params: IParameter): Promise<ISet[]> {
    const client: Client = Client.getInstance();
    const response: ISet[] = await client.get<ISet[]>('sets', params);
    return response;
}

export async function getAllSets(): Promise<ISet[]> {
    const params: IParameter = { pageSize: 250 };

    const client: Client = Client.getInstance();
    const response: ISet[] = await client.get<ISet[]>('sets', params);
    return response;
}
