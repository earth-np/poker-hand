import { BLACK_WIN_MESSAGE, TIE_MESSAGE, WHITE_WIN_MESSAGE } from '../const';

import _ from 'lodash';

export const getWinner = (whiteCard: number, blackCard: number) => {
  if (whiteCard === blackCard) return TIE_MESSAGE;
  return whiteCard > blackCard ? WHITE_WIN_MESSAGE : BLACK_WIN_MESSAGE;
};
