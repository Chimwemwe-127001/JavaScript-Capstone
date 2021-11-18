import fetch from 'cross-fetch';

const commentsApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GRWzq7F1QiyQiW4Miwtn/comments/';
const sendComments = async (id, username, comment) => {
  let response;
  if (id) {
    response = await fetch(commentsApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        if (result === 'Created') {
          return { error: false, data: result };
        }
        return { error: true, data: result };
      })
      .catch((error) => ({ error: true, data: error }));
  } else {
    response = { error: true, data: 'missing id' };
  }
  return response;
};

export default sendComments;