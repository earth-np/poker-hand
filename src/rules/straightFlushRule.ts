import { getMaxSameTypeCard, getMaxValueCard, getWinner, isCardConsecutive } from '../utils';

export const isContainStraightFlush = (groupedCard: any) => {
  return isCardConsecutive(groupedCard) && getMaxSameTypeCard(groupedCard) === 5;
};

export const handleBothStraightFlush = (groupedCardWhite: any, groupedCardBlack: any) => {
  const maxValueFromPlayerWhite = getMaxValueCard(groupedCardWhite);
  const maxValueFromPlayerBlack = getMaxValueCard(groupedCardBlack);
  return getWinner(maxValueFromPlayerWhite, maxValueFromPlayerBlack);
};
