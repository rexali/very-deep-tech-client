
export const ActionTypes = {
    GET_NEWS: 'GET_NEWS',
    GET_WAQFS:'GET_WAQFS',
    GET_MESSAGES:'GET_MESSAGES',
    GET_NOTIFICATIONS:'GET_NOTIFICATIONS',
    POST_NEWS: 'POST_NEWS',
  };
  
  export const getNews = (newsData:any) => ({
    type: ActionTypes.GET_NEWS,
    payload: newsData,
  });
  
  export const getMessages = (messagesData:any) => ({
    type: ActionTypes.GET_MESSAGES,
    payload: messagesData,
  });

  
  export const getNotifications = (notificationsData:any) => ({
    type: ActionTypes.GET_NOTIFICATIONS,
    payload: notificationsData,
  });

  
  export const getWaqfs = (waqfsData:any) => ({
    type: ActionTypes.GET_WAQFS,
    payload: waqfsData,
  });
  
  export const postNews = (newsData: any) => ({
    type: ActionTypes.POST_NEWS,
    payload:newsData ,
  });
  