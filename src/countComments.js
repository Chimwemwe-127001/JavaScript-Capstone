import fetch from 'cross-fetch';

const commentsApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GRWzq7F1QiyQiW4Miwtn/comments/';

const countComments = async (id) => {
  // fetch comments
  const response = await fetch(`${commentsApiURL}?item_id=${id}`)
    .then((res) => res.json())
    .then((result) => {
      if (result.error) {
        return 0;
      } return result.length;
    })
    .catch((err) => err);
  return response;
};

// countComments(2562704);

module.exports = countComments;