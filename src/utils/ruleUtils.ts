import { cardTypes, cardValues } from '../const';
import _ from 'lodash';

export const getMaxSameValueCard = (groupedCard: any) => {
  return _.chain(groupedCard)
    .pick(cardValues)
    .values()
    .map(_.parseInt)
    .max()
    .value();
};

export const getMaxSameTypeCard = (groupedCard: any) => {
  return _.chain(groupedCard)
    .pick(cardTypes)
    .values()
    .map(_.parseInt)
    .max()
    .value();
};

export const getCardByAmountOnHand = (groupedCard: any, amount: number) =>
  _.chain(groupedCard)
    .pick(cardValues)
    .pickBy(cardAmount => cardAmount === amount)
    .keys()
    .map(_.parseInt)
    .value();

export const getMaxValueCard = (groupedCard: any) =>
  _.chain(groupedCard)
    .pick(cardValues)
    .keys()
    .map(_.parseInt)
    .max()
    .value();

export const getDiffCardAmount = (groupedCard: any) => {
  return _.chain(groupedCard)
    .pick(cardValues)
    .values()
    .value().length;
};

export const isCardConsecutive = (groupedCard: any) => {
  const temp = _.chain(groupedCard)
    .pick(cardValues)
    .keys()
    .map(_.parseInt)
    .value();
  return _.sum(temp) === ((_.min(temp) + _.max(temp)) * temp.length) / 2;
};
