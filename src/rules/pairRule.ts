import { getCardByAmountOnHand, getMaxSameValueCard, getWinner } from '../utils';
import _ from 'lodash';
import { handleBothHighCard } from './hightCardRule';
export const isContainPair = (groupedCard: any) => {
  return getMaxSameValueCard(groupedCard) === 2;
};

export const handleBothPair = (groupedCardWhite: any, groupedCardBlack: any) => {
  const PairFromPlayerWhite = getCardByAmountOnHand(groupedCardWhite, 2);
  const PairFromPlayerBlack = getCardByAmountOnHand(groupedCardBlack, 2);
  const DiffWhite = _.difference(PairFromPlayerWhite, PairFromPlayerBlack);
  const DiffBlack = _.difference(PairFromPlayerBlack, PairFromPlayerWhite);
  if (DiffWhite.length === 0 && DiffBlack.length === 0) return handleBothHighCard(groupedCardWhite, groupedCardBlack);
  return getWinner(_.max(DiffWhite), _.max(DiffBlack));
};
