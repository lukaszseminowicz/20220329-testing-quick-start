import { messages } from './messages.js';

const $msgHeader = document.querySelector('[data-msg-header]');
const $msgBody = document.querySelector('[data-msg-body]');
const $btnPrev = document.querySelector('[data-btn-prev]');
const $btnNext = document.querySelector('[data-btn-next]');

function settleButtons({ hasNext, hasPrevious }) {
  $btnNext.disabled = !hasNext;
  $btnPrev.disabled = !hasPrevious;
}

function loadNextMessage() {
  const { text, message, hasNext, hasPrevious } = messages.getNextMessage();
  $msgHeader.innerHTML = text;
  $msgBody.innerHTML = message;
  settleButtons({ hasNext, hasPrevious });
}

function loadPreviousMessage() {
  const { text, message, hasNext, hasPrevious } = messages.getPreviousMessage();
  $msgHeader.innerHTML = text;
  $msgBody.innerHTML = message;
  settleButtons({ hasNext, hasPrevious });
}

$btnNext.addEventListener('click', loadNextMessage);
$btnPrev.addEventListener('click', loadPreviousMessage);

loadNextMessage();
