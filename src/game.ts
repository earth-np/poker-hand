import { stringToCard, groupCard, getWinner } from './utils';
import Ruler from './rules';
import _ from 'lodash';

export const playGame = (whiteCardsString: string, blackCardsString: string) => {
  const whiteCards = stringToCard(whiteCardsString);
  const blackCards = stringToCard(blackCardsString);
  const whiteGroupedCard = groupCard(whiteCards);
  const blackGroupedCard = groupCard(blackCards);
  const gameRuler = new Ruler();
  const winnerMessage = gameRuler.calculateRank(whiteGroupedCard, blackGroupedCard);
  return winnerMessage;
};
