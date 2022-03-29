// import { faker } from 'https://cdn.jsdelivr.net/npm/@faker-js/faker@6.0.0/dist/esm/index.js';

const msgArray = [
  {
    text: 'Murray - McDermott',
    message:
      'Ullam esse ratione voluptatem quis fugiat. Molestias qui et doloremque quaerat. Delectus ea necessitatibus quia commodi aperiam voluptates architecto laboriosam excepturi.',
  },
  {
    text: 'Haag - Hahn',
    message:
      'Quis sequi aliquid quia accusamus asperiores nesciunt eos. Qui ut corrupti enim iure maxime veniam doloremque doloremque est. Aliquid ad et cupiditate error est vero. Quis et pariatur ex doloremque eveniet sapiente maiores quidem voluptatum. Officia consequatur facere quo excepturi magni.',
  },
  {
    text: 'Zboncak, Walsh and Nienow',
    message:
      'Dolores dolorem ullam soluta culpa quia dolor ipsa omnis quia. Totam dolores in ad rerum. Non autem provident consequatur ut dolor tempore. Omnis illum sit delectus numquam dignissimos ut velit.',
  },
  {
    text: 'Strosin - Keebler',
    message:
      'Harum consequatur dolore voluptates reprehenderit quo quaerat. Accusantium modi pariatur facere at voluptas. Omnis eligendi et laudantium nihil. Doloribus nobis odio doloremque illum libero dolor quis. Beatae quia et dicta magnam ullam tempore quaerat ratione temporibus. Et esse excepturi laudantium expedita qui sint aut.',
  },
  {
    text: 'Abernathy Group',
    message:
      'Nobis nisi id et voluptatem vel odio fuga. Rem vero eum amet aut nesciunt. Modi nemo quo iste ratione atque minima ut consequatur. Ratione porro reprehenderit error. Iusto recusandae iure dolores illo eos eius.',
  },
];

let currentMessage = -1;

export const messages = {
  getNextMessage() {
    const nextMessage = msgArray[currentMessage + 1];
    if (nextMessage) {
      currentMessage++;
    }
    const { text, message } = msgArray[currentMessage];
    return {
      text,
      message,
      hasNext: Boolean(msgArray[currentMessage + 1]),
      hasPrevious: Boolean(msgArray[currentMessage - 1]),
    };
  },
  getPreviousMessage() {
    const previousMessage = msgArray[currentMessage - 1];
    if (previousMessage) {
      currentMessage--;
    }
    const { text, message } = msgArray[currentMessage];
    return {
      text,
      message,
      hasNext: Boolean(msgArray[currentMessage + 1]),
      hasPrevious: Boolean(msgArray[currentMessage - 1]),
    };
  },
  restart() {
    currentMessage = -1;
    return messages.getNextMessage();
  },
};
