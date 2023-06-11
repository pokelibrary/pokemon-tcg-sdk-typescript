import { Client } from '~/client';
import { IParameter } from '~/interfaces/IParameter';
import { ISet } from '~/interfaces/ISet';

export const findSetByID = async (id: string): Promise<ISet> => {
  const client: Client = Client.getInstance();

  const response: ISet = await client.get<ISet>('sets', id);

  return response;
};

export const findSetsByQueries = async (
  params: IParameter,
): Promise<ISet[]> => {
  const client: Client = Client.getInstance();

  const response: ISet[] = await client.get<ISet[]>('sets', params);

  return response;
};

export const getAllSets = async (): Promise<ISet[]> => {
  const params: IParameter = { pageSize: 250 };

  const client: Client = Client.getInstance();

  const response: ISet[] = await client.get<ISet[]>('sets', params);

  return response;
};
