import { getCardByAmountOnHand, getDiffCardAmount, getMaxSameValueCard, getWinner } from '../utils';

export const isContainFullHouse = (groupedCard: any) => {
  return getMaxSameValueCard(groupedCard) === 3 && getDiffCardAmount(groupedCard) === 2;
};

export const handleBothFullHouse = (groupedCardWhite: any, groupedCardBlack: any) => {
  const ThreeOfAKindFromPlayerWhite = getCardByAmountOnHand(groupedCardWhite, 3)[0];
  const ThreeOfAKindFromPlayerBlack = getCardByAmountOnHand(groupedCardBlack, 3)[0];
  return getWinner(ThreeOfAKindFromPlayerWhite, ThreeOfAKindFromPlayerBlack);
};
