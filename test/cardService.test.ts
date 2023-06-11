import type { ICard, IParameter } from '~/sdk';
import {
  Rarity,
  Subtype,
  Supertype,
  Type,
  findCardByID,
  findCardsByQueries,
  getRarities,
  getSubtypes,
  getSupertypes,
  getTypes,
} from '~/sdk';

describe('Card Service', () => {
  it('should get a single card using query parameters', async () => {
    const params: IParameter = { q: 'id:xy7-54' };

    const result: ICard[] = await findCardsByQueries(params);

    expect(result[0].name).toEqual('Gardevoir');
  });

  it('should get a single card using a card id', async () => {
    const result: ICard = await findCardByID('xy7-54');

    expect(result.name).toEqual('Gardevoir');
  });

  it('should get a maximum of 250 cards given a page number by default', async () => {
    const totalCards = 250;

    const results: ICard[] = await findCardsByQueries({ page: 1 });

    expect(results).toHaveLength(totalCards);
  });

  it('should get a list of card supertypes', async () => {
    const expected: Supertype[] = Object.values(Supertype);

    const result: Supertype[] = await getSupertypes();

    expect(expected.sort()).toEqual(result.sort());
  });

  it('should get a list of card subtypes', async () => {
    const expected: Subtype[] = Object.values(Subtype);

    const result: Subtype[] = await getSubtypes();

    expect(expected.sort()).toEqual(result.sort());
  });

  it('should get a list of card rarities', async () => {
    const expected: Rarity[] = Object.values(Rarity);

    const result: Rarity[] = await getRarities();

    expect(expected.sort()).toEqual(result.sort());
  });

  it('should get a list of card types', async () => {
    const expected: Type[] = Object.values(Type);

    const result: Type[] = await getTypes();

    expect(expected.sort()).toEqual(result.sort());
  });
});
