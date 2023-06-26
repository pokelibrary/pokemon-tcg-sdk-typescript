import type { IParameter, ISet } from '../src/interfaces';
import { findSetByID, findSetsByQueries, getAllSets } from '../src/sdk';

describe('Set Service', () => {
  it('should get a single set using query parameters', async () => {
    const params: IParameter = { q: 'name:Base' };

    const result: ISet[] = await findSetsByQueries(params);

    expect(result[0].name).toEqual('Expedition Base Set');
  });

  it('should get a single set using a set id', async () => {
    const result: ISet = await findSetByID('base1');

    expect(result.name).toEqual('Base');
  });

  it('should get a default list of sets using the sets resource with no query params', async () => {
    const results: ISet[] = await getAllSets();

    expect(results.length).toBeLessThanOrEqual(250);
  });
});
