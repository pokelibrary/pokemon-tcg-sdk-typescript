import type { Rarity } from '../enums/Rarity';
import type { Subtype } from '../enums/Subtype';
import type { Supertype } from '../enums/Supertype';
import type { Type } from '../enums/Type';

import type { IAbility } from './IAbility';
import type { IAncientTrait } from './IAncientTrait';
import type { IAttack } from './IAttack';
import type { ICardImage } from './ICardImage';
import type { ILegality } from './ILegality';
import type { IResistance } from './IResistance';
import type { ISet } from './ISet';
import type { ITCGPlayer } from './ITCGPlayer';
import type { IWeakness } from './IWeakness';

export interface ICard {
  abilities?: IAbility[];
  ancientTrait?: IAncientTrait;
  artist?: string;
  attacks?: IAttack[];
  convertedRetreatCost?: number;
  evolvesFrom?: string;
  evolvesTo?: string[];
  flavorText?: string;
  hp?: string;
  id: string;
  images: ICardImage;
  legalities: ILegality;
  name: string;
  nationalPokedexNumbers?: number[];
  number: string;
  rarity?: Rarity;
  resistances?: IResistance[];
  retreatCost?: string[];
  rules?: string[];
  set: ISet;
  subtypes: Subtype[];
  supertype: Supertype;
  tcgplayer?: ITCGPlayer;
  types?: Type[];
  weaknesses?: IWeakness[];
}
