import postComments from './postcommints.js';
import getComments from './getcomments.js';

const display = (items) => {
  const COMMENTS = document.querySelectorAll('.comment');
  COMMENTS.forEach((comment) => {
    comment.addEventListener('click', () => {
      const id = comment.getAttribute('data-id');
      const item = items.find((o) => o.idMeal === id);
      const parmodal = document.querySelector('.parmodal');
      parmodal.style.display = 'grid';
      parmodal.innerHTML = `
              <div class="parmodal__modal">
                <div class="front"><button id="close" class="close">&times;</button></div>
                <div class="parmodal__modal__details">
                  <div class="parmodal__modal__details__detail">
                  <div class="parmodal__modal__details__detail__responsive">
                    <img src="${item.strMealThumb}" alt="" class="responsive parmodal__modal__details__detail__responsive__respo">
                    </div>
                    <h3>Add comment</h3>
                    <form action="">
                      <div class="formcontrol">
                        <input type="text" name="name" id="name" placeholder="Name" />
                      </div>
                      <div class="formcontrol">
                        <textarea
                          name="textarea"
                          id="textarea"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div class="formcontrol">
                        <input type="submit" value="comment" id="submit" data-id="${item.idMeal}"/>
                      </div>
                    </form>
                  </div>
                  <div class="parmodal__modal__details__detail">
                    <span></span>
                    <p>
                     ${item.strMeal}
                    strInstructions
                    </p>
                    <h3>comments <span id="numofcom"></span></h3>
                    <ul id="ulc">
                    </ul>
                  </div>
                </div>
              </div>
            `;
      const close = document.querySelector('#close');
      close.addEventListener('click', () => {
        parmodal.style.display = 'none';
      });
      const Name = document.querySelector('#name');
      const Textarea = document.querySelector('#textarea');
      const submit = document.querySelector('#submit');
      // const id = submit.getAttribute('data-id');
      submit.addEventListener('click', (e) => {
        e.preventDefault();
        postComments({ item_id: id, username: Name.value, comment: Textarea.value });
      });
      const showComments = document.querySelector('#ulc');
      const Show = getComments(id);
      let x = [];
      Show.then((item) => {
        x = item;
        x.forEach((item) => {
          showComments.innerHTML += `<div class="commentBox"><div>${item.username}</div><div>${item.comment}</div></div>`;
        });
      }).catch(() => {
        showComments.innerHTML += '<div class="commentBox"><span></span><span>No Comments here</span></div>';
      });
    });
  });
};
export default display;
