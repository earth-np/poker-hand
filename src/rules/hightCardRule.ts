import { getCardByAmountOnHand, getMaxSameValueCard, getWinner } from '../utils';
import _ from 'lodash';
import { TIE_MESSAGE } from '../const';

export const isContainHighCard = (groupedCard: any) => {
  return getMaxSameValueCard(groupedCard) === 1;
};

export const handleBothHighCard = (groupedCardWhite: any, groupedCardBlack: any) => {
  const SingleCardsFromPlayerWhite = getCardByAmountOnHand(groupedCardWhite, 1);
  const SingleCardsFromPlayerBlack = getCardByAmountOnHand(groupedCardBlack, 1);
  const DiffWhite = _.difference(SingleCardsFromPlayerWhite, SingleCardsFromPlayerBlack);
  const DiffBlack = _.difference(SingleCardsFromPlayerBlack, SingleCardsFromPlayerWhite);
  if (DiffWhite.length === 0 && DiffBlack.length === 0) return TIE_MESSAGE;
  return getWinner(_.max(DiffWhite), _.max(DiffBlack));
};
