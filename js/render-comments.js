const socialComments = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentShownCount = socialCommentCount.querySelector('.social__comment-shown-count');
const loadCommentButton = document.querySelector('.social__comments-loader');


const createComment = ({name, avatar, message}) => {

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const imgElement = document.createElement('img');
  imgElement.alt = name;
  imgElement.src = avatar;
  imgElement.classList.add('social__picture');
  imgElement.width = 35;
  imgElement.height = 35;

  const textElement = document.createElement('p');
  textElement.classList.add('social__text');
  textElement.textContent = message;


  commentElement.appendChild(imgElement);
  commentElement.appendChild(textElement);

  return commentElement;
};

const COMMENTS_COUNT_SHOW = 5;

let commentsAll = [];

const loadMoreComments = () => {
  socialCommentCount.classList.remove('hidden');
  loadCommentButton.classList.remove('hidden');

  const currentCountComment = socialComments.children.length;
  let nextCountComment = currentCountComment + COMMENTS_COUNT_SHOW;
  nextCountComment = nextCountComment > commentsAll.length ? commentsAll.length : nextCountComment;
  if (nextCountComment >= commentsAll.length){
    loadCommentButton.classList.add('hidden');
  }
  if (commentsAll.length <= COMMENTS_COUNT_SHOW){
    socialCommentCount.classList.add('hidden');
  }

  const nextCommentsShow = commentsAll.slice(currentCountComment, nextCountComment);
  socialCommentShownCount.textContent = nextCountComment;

  nextCommentsShow.forEach((comment) => {
    socialComments.appendChild(createComment(comment));
  });
};


const renderComments = ({comments}) => {
  commentsAll = comments;
  socialComments.innerHTML = '';

  loadMoreComments();
};

loadCommentButton.addEventListener('click', loadMoreComments);

export {renderComments};
