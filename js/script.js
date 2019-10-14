var feedback = document.querySelector('.feedback');
var feedbackButton = document.querySelector('.map-contact-block__button');
var feedbackButtonClose = document.querySelector('.feedback-form__close')

feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    feedback.classList.add('display-show');
});

feedbackButtonClose.addEventListener("click", function(evt){
    evt.preventDefault();

    feedback.classList.toggle('display-show');
});