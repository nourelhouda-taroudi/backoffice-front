const BASE_PATH = 'ws-backoffice';
const BASE_EMISSION_PATH='ws-emission';
export const PATHS = {
  BACKOFFICE: {
    TRANSFERS: {
      ALL:BASE_EMISSION_PATH+'/cash/getAllTransfers',
      ALL_UNLOCKED: BASE_PATH + '/lock/getAllToServeTransfers',
      LOCK: BASE_PATH + '/lock/',
      UNLOCK: BASE_PATH + '/unlock',
      ALL_LOCKED: BASE_PATH + '/unlock/getAllBlockedTransfers',
      RETURN: BASE_PATH + '/restitution/validate',
    },
    SETTINGS: {
      ALL: 'settings/all',
      UPDATE: 'settings/update',
    },
  },
};
