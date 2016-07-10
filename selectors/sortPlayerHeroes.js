import { createSelector } from 'reselect';
import { playerHeroes } from '../reducers';
import transformPlayerHeroesById from './transformPlayerHeroes';

const getSortState = id => state => playerHeroes.getSortState(state, id);
const getSortField = id => state => playerHeroes.getSortField(state, id);
const getSortFn = id => state => playerHeroes.getSortFn(state, id);

const sortPlayerHeroes = (id, numRows) => createSelector(
  [transformPlayerHeroesById(id, numRows), getSortState(id), getSortField(id), getSortFn(id)],
  (heroes, sortState, sortField, sortFn) =>
    (sortState === 'desc' ? sortFn(heroes, sortField).reverse() : sortFn(heroes, sortField))
);

export default sortPlayerHeroes;
