import request from './index'
 
//获取用户信息接口
export const getUserInfo = (data) => request.get('/getUserInfo', { params: data });
export const getUserData = (data) => request.get('/getUserData', { params: data });//
export const insertData = (data) => request.post('/insertData', data);
export const delData = (data) => request.post('/delData', data);
export const upData = (data) => request.post('/upData', data);

