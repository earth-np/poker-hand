import { getMaxValueCard, getWinner, isCardConsecutive } from '../utils';

export const isContainStraight = (groupedCard: any) => {
  return isCardConsecutive(groupedCard);
};

export const handleBothStraight = (groupedCardWhite: any, groupedCardBlack: any) => {
  const maxValueFromPlayerWhite = getMaxValueCard(groupedCardWhite);
  const maxValueFromPlayerBlack = getMaxValueCard(groupedCardBlack);
  return getWinner(maxValueFromPlayerWhite, maxValueFromPlayerBlack);
};
