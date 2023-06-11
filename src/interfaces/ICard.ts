import { Rarity } from "../enums/Rarity";
import { Subtype } from "../enums/Subtype";
import { Supertype } from "../enums/Supertype";
import { Type } from "../enums/Type";

import { IAbility } from "./IAbility";
import { IAncientTrait } from "./IAncientTrait";
import { IAttack } from "./IAttack";
import { ICardImage } from "./ICardImage";
import { ILegality } from "./ILegality";
import { IResistance } from "./IResistance";
import { ISet } from "./ISet";
import { ITCGPlayer } from "./ITCGPlayer";
import { IWeakness } from "./IWeakness";

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
