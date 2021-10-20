// Action Constructor

import { ActionContext } from 'vuex';
import { Api } from '../api/apiCon';

const actCon = <I, O, S, R>(api: Api<I, O>, mutation?: string) => async (ctx: ActionContext<S, R>, payload: I) => {
  const r = await api(payload);
  console.log('[Response]');
  console.log(r);
  if (mutation) ctx.commit(mutation, r);
  return r;
};

export default actCon;