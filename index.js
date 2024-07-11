function submitData(userName, userEmail) {
  let fetchRequest = fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((response) => response.json())
    .then((userData) => document.querySelector('body').append(userData.id))
    .catch((error) => document.querySelector('body').append(error));
  return fetchRequest;
}
submitData('sam', 'sam@sam.com');
