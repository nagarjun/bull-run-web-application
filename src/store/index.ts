import { createStore } from 'vuex';
import * as MockPositions from './mocks/positions.json';

export interface Positions {
  Product: Product;
  Instrument: string;
  Qty: number;
  Avg: number;
  LTP: number;
  'P&L': number;
  Chg: number;
}

export enum Product {
  MIS = 'MIS',
  Nrml = 'NRML',
}

export default createStore({
  state: {
    positions: MockPositions as Positions[],
  },
  mutations: {},
  actions: {},
  modules: {},
});
