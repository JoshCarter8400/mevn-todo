import jwt from 'jsonwebtoken';
import store from '../store';
import { http } from './HttpsService';

export function isLoggedIn() {
  const token = localStorage.getItem('token');
  return token != null;
}

export function login(user) {
  return http()
    .post('/auth', user)
    .then((res) => {
      if (res) {
        setToken(res.data.token);
      }
    });
}

export function logout() {
  localStorage.clear();
  store.dispatch('authenticate');
}

function setToken(token) {
  localStorage.setItem('token', token);
  store.dispatch('authenticate');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getUserName() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.username;
}

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.id;
}

export function registerUser(user) {
  return http().post('/register', user);
}

function decodeToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  return jwt.decode(token);
}
