export type RAMLimitOrderMessage = {
  type: "buyRamBytes";
  userId: number;
  recipient: string;
  bytes: number;
  orderId: number;
};

export type RAMLimitOrderResultMessage = {
  type: "buyRamBytesResult";
  result: any;
  orderId: number;
};

export type xaPayCallbackMessage = {
  type: "0xaPayCallback";
  userId: number;
};

export type xaPayCallbackResultMessage = {
  type: "0xaPayCallbackResult";
  result: any;
};

export const PAYMENT_TYPES = ["credit", "crypto"];