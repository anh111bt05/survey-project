// Doing data service

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return { Authorization: 'Bearer ' + user };

    // for Node.js Express back-end
    // return { 'x-access-token': user };
    
  } else {
    return {};
  }
}