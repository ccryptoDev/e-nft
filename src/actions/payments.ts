import { createAction } from '../utils';
import { PAYMENT, OrderData } from './types';

export const payment = {
  cryptoRequest: (nftId: string, price: number) => createAction(PAYMENT.CRYPTO_REQUEST, {nftId, price}),
  cryptoSuccess: (data: OrderData) => createAction(PAYMENT.CRYPTO_SUCCESS, { ...data }),
  cryptoFailure: (error: Object) => createAction(PAYMENT.CRYPTO_FAILURE, {...error}),
  visaRequest: (nftId: string, price: number) => createAction(PAYMENT.VISA_REQUEST, {nftId, price}),
  visaSuccess: (data: OrderData) => createAction(PAYMENT.VISA_SUCCESS, data),
  visaFailure: (error: Object) => createAction(PAYMENT.VISA_FAILURE, error),
}