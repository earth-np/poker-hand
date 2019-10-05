import { getMaxSameTypeCard, getMaxValueCard, getWinner } from '../utils';

export const isContainFlush = (groupedCard: any) => {
  return getMaxSameTypeCard(groupedCard) === 5;
};
export const handleBothFlush = (groupedCardWhite: any, groupedCardBlack: any) => {
  const maxValueFromPlayerWhite = getMaxValueCard(groupedCardWhite);
  const maxValueFromPlayerBlack = getMaxValueCard(groupedCardBlack);
  return getWinner(maxValueFromPlayerWhite, maxValueFromPlayerBlack);
};
