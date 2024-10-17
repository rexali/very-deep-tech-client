
export const ActionTypes = {
  GET_WAQF: 'GET_WAQF',
  POST_WAQF: 'POST_WAQF',
};

export const getWAQF = (waqfData: any) => ({
  type: ActionTypes.GET_WAQF,
  payload: waqfData,
});

export const postWAQF = (waqfData: any) => ({
  type: ActionTypes.POST_WAQF,
  payload: waqfData,
});
