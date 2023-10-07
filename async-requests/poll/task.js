let xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

xhr.open('GET', url);

function htmlInsert(title, answersList) {

  pollTitle.textContent = title;
  
  answersList.forEach(answer => {
    const htmlAnswers = `
      <button class="poll__answer">
        ${answer}
      </button>
    `;

    pollAnswers.insertAdjacentHTML("afterbegin", htmlAnswers);
  });  
};

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let response = JSON.parse(xhr.response);
    let id = response['id'];
    let title = response['data']['title'];
    let answers = response['data']['answers'];

    htmlInsert(title, answers);

    let btns = Array.from(document.querySelectorAll('.poll__answer'));
    
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        
        let xhrPost = new XMLHttpRequest();
        
        xhrPost.open('POST', url);

        xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhrPost.addEventListener('readystatechange', () => {
          if (xhrPost.readyState === xhrPost.DONE) {
            let responsePost = (JSON.parse(xhrPost.response))['stat'];

            pollAnswers.classList.toggle('poll__answers_active');

            responsePost.forEach(obj => {
              const html = `
                <div>
                  ${obj['answer']}: ${obj['votes']}%
                </div>
              `;
              
              pollAnswers.insertAdjacentHTML("beforebegin", html);
            });
          };
        });

        let params = `vote=${id}&answer=${index}`;
        
        xhrPost.send(params);
      });
    });
  };
});

xhr.send();
