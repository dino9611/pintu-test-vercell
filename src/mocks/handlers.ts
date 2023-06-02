import { rest } from 'msw';
import { responsePriceChange, responseSuppCurr } from './response';

export const handlers = [
  rest.get('*/trade/price-changes', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(responsePriceChange));
  }),

  rest.get('*/wallet/supportedCurrencies', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseSuppCurr));
  }),
];
