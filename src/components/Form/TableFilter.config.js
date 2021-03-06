import heroes from 'dotaconstants/json/heroes.json';
import laneRole from 'dotaconstants/json/lane_role.json';
import patch from 'dotaconstants/json/patch.json';
import gameMode from 'dotaconstants/json/game_mode.json';
import lobbyType from 'dotaconstants/json/lobby_type.json';
import region from 'dotaconstants/json/region.json';

// This has to be a list in order to pass it in.
// We should consider refactoring all these kinds of objects into lists. I understand
// they are probably built like this to allow map key access but it would be nice if I didn't
// have to convert them all into arrays.
export const heroList = Object.keys(heroes).map(id => ({
  text: heroes[id].localized_name,
  value: id,
}));
export const laneList = Object.keys(laneRole).map(id => ({
  text: laneRole[id],
  value: Number(id),
}));
export const patchList = patch.map((patch, index) => ({
  text: patch.name,
  value: index,
})).reverse();
export const modeList = Object.keys(gameMode).map(id => ({
  text: gameMode[id].name,
  value: id,
}));
export const lobbyTypeList = Object.keys(lobbyType).map(id => ({
  text: lobbyType[id].name,
  value: id,
}));
export const regionList = Object.keys(region).map(id => ({
  text: region[id],
  value: Number(id),
}));

export const factionList = [{
  text: 'dire',
  value: 0,
}, {
  text: 'radiant',
  value: 1,
}];
export const resultList = [{
  text: 'loss',
  value: 0,
}, {
  text: 'win',
  value: 1,
}];
export const dateList = [{
  text: 'last week',
  value: 7,
}, {
  text: 'last month',
  value: 30,
}, {
  text: 'last 3 months',
  value: 90,
}, {
  text: 'last 6 months',
  value: 180,
}];
