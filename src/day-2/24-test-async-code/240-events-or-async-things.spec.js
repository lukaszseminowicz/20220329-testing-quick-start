/**
 * Testowanie Promises
 *
 * możemy realizować na kilka sposobów.
 * - promise może zostać zwrócona w teście,
 * - używając składni expect().resolves albo expect().rejects (w zależności od tego, co sprawdzamy),
 * - używając składni async / await (wymaga to pluginu jeśli korzystamy z @babel/core)
 *
 * https://jestjs.io/docs/asynchronous
 * */

function sendTheEmail(to, title) {
  return new Promise(resolve =>
    resolve({ from: 'unknown@example.com', to, title })
  );
}

describe('promises - for sendTheEmail', () => {
  it('should resolve promise - option (1) return promise and .then() / .catch()', () => {
    return sendTheEmail('mark@example.com', 'New Year is coming!').then(
      envelope => {
        expect(envelope).toEqual({
          from: 'unknown@example.com',
          to: 'mark@example.com',
          title: 'New Year is coming!',
        });
      }
    );
  });

  it('should resolve promise - option (2) expect().resolves /  .rejects', () => {
    return expect(
      sendTheEmail('mark@example.com', 'New Year is coming!')
    ).resolves.toEqual({
      from: 'unknown@example.com',
      to: 'mark@example.com',
      title: 'New Year is coming!',
    });
  });

  it('should resolve promise - option (3) done callback function', done => {
    // warto zaznaczyć, że będziemy robić jedną asercję w kodzie (aby nie zapomnieć jej wykonać!)
    expect.assertions(1);
    sendTheEmail('shaun@example.com', 'New Year!').then(envelope => {
      expect(envelope).toEqual({
        from: 'unknown@example.com',
        to: 'shaun@example.com',
        title: 'New Year!',
      });
      done();
    });
  });

  it('should resolve promise - option (4) async - await', async () => {
    const envelope = await sendTheEmail('anna@example.com', 'New!');

    expect(envelope).toEqual({
      from: 'unknown@example.com',
      to: 'anna@example.com',
      title: 'New!',
    });
  });

  it('should resolve promise - option (5) async - await combined', async () => {
    await expect(sendTheEmail('joanna@example.com', 'Wow!?')).resolves.toEqual({
      from: 'unknown@example.com',
      to: 'joanna@example.com',
      title: 'Wow!?',
    });
  });
});
