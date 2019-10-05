import { getCardByAmountOnHand, getMaxSameValueCard, getWinner } from '../utils';

export const isContainFourOfAKind = (groupedCard: any) => {
  return getMaxSameValueCard(groupedCard) === 4;
};

export const handleBothFourOfAKind = (groupedCardWhite: any, groupedCardBlack: any) => {
  const FourofAKindFromPlayerWhite = getCardByAmountOnHand(groupedCardWhite, 4)[0];
  const FourofAKindFromPlayerBlack = getCardByAmountOnHand(groupedCardBlack, 4)[0];
  return getWinner(FourofAKindFromPlayerWhite, FourofAKindFromPlayerBlack);
};
