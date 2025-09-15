const API_BASE = window.__API_BASE__ || '/api';

export async function fetchTodayMenu(params = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = `${API_BASE}/menu/today${qs?('?'+qs):''}`;
  const res = await fetch(url, { credentials: 'include' });
  if(!res.ok) throw new Error('Päivän listan haku epäonnistui');
  return res.json();
}

export async function postOrder(orderData) {
  const res = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    credentials: 'include',
    body: JSON.stringify(orderData)
  });
  return res.json();
}

export async function registerUser(body){
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body), credentials:'include'
  });
  return res.json();
}
export async function loginUser(body){
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body), credentials:'include'
  });
  return res.json();
}
