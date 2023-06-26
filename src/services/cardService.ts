import { Client } from '../client';
import { Rarity } from '../enums/Rarity';
import { Subtype } from '../enums/Subtype';
import { Supertype } from '../enums/Supertype';
import { Type } from '../enums/Type';
import { ICard } from '../interfaces/ICard';
import { IParameter } from '../interfaces/IParameter';

const paginateAllCards = async (
  pageNumber: number,
  params?: IParameter,
): Promise<ICard[]> => {
  let currentPage = pageNumber;

  const client: Client = Client.getInstance();

  const response: ICard[] = await client.get<ICard[]>('cards', {
    pageSize: 250,
    page: currentPage,
    ...params,
  });

  if (response.length === 0) {
    return response;
  } else {
    currentPage = currentPage + 1;

    return response.concat(await paginateAllCards(currentPage));
  }
};

export const getAllCards = async (params?: IParameter): Promise<ICard[]> => {
  const startingPage = 1;

  const response: ICard[] = await paginateAllCards(startingPage, params);

  return response;
};

export const findCardByID = async (id: string): Promise<ICard> => {
  const client: Client = Client.getInstance();

  const response: ICard = await client.get<ICard>('cards', id);

  return response;
};

export const findCardsByQueries = async (
  params: IParameter,
): Promise<ICard[]> => {
  const client: Client = Client.getInstance();

  const response: ICard[] = await client.get<ICard[]>('cards', params);

  return response;
};

export const getTypes = async (): Promise<Type[]> => {
  const client: Client = Client.getInstance();

  const response: Type[] = await client.get<Type[]>('types');

  return response;
};

export const getSupertypes = async (): Promise<Supertype[]> => {
  const client: Client = Client.getInstance();

  const response: Supertype[] = await client.get<Supertype[]>('supertypes');

  return response;
};

export const getSubtypes = async (): Promise<Subtype[]> => {
  const client: Client = Client.getInstance();

  const response: Subtype[] = await client.get<Subtype[]>('subtypes');

  return response;
};

export const getRarities = async (): Promise<Rarity[]> => {
  const client: Client = Client.getInstance();

  const response: Rarity[] = await client.get<Rarity[]>('rarities');

  return response;
};
