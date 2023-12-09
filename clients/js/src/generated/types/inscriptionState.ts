/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum InscriptionState {
  Raw,
  Validated,
  Curated,
}

export type InscriptionStateArgs = InscriptionState;

export function getInscriptionStateSerializer(): Serializer<
  InscriptionStateArgs,
  InscriptionState
> {
  return scalarEnum<InscriptionState>(InscriptionState, {
    description: 'InscriptionState',
  }) as Serializer<InscriptionStateArgs, InscriptionState>;
}