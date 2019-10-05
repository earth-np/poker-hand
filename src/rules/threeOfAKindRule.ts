import { getCardByAmountOnHand, getMaxSameValueCard, getWinner } from '../utils';

export const isContainThreeOfAKind = (groupedCard: any) => {
  return getMaxSameValueCard(groupedCard) === 3;
};
export const handleBothThreeOfAKind = (groupedCardWhite: any, groupedCardBlack: any) => {
  const ThreeOfAKindFromPlayerWhite = getCardByAmountOnHand(groupedCardWhite, 3)[0];
  const ThreeOfAKindFromPlayerBlack = getCardByAmountOnHand(groupedCardBlack, 3)[0];
  return getWinner(ThreeOfAKindFromPlayerWhite, ThreeOfAKindFromPlayerBlack);
};
