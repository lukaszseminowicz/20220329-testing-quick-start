/**
 *
 * Spy — czyli "szpieg" to funkcja, która zachowuje się jak natywna implementacja —
 * więc ją imituje.
 * Poza tym jeszcze... pozwala nam odpowiedzieć na pytania:
 *
 * Czy coś zostało użyte (konkretnie czy funkcja została wywołana) ?
 * Jak to zostało użyte (jakie argumenty zostały przekazane do funkcji) ?
 *
 * Równocześnie może ona zwrócić tzw. Stub'a — żeby całość logiki mogła zadziałać poprawnie, a test wykonać.
 *
 * */

function callMyFriend(voiceMail) {
  voiceMail('Please record the message, after signal');
  voiceMail('beep');
}

describe('[220] callMyFriend', () => {
  it('should hear 2 commands on voice mail', () => {
    const spy = jest.fn();

    callMyFriend(spy);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should hear both of commands', () => {
    const spy = jest.fn();

    callMyFriend(spy);

    expect(spy).toHaveBeenCalledWith('beep');
    expect(spy).toHaveBeenCalledWith('Please record the message, after signal');
    expect(spy).toHaveBeenCalledWith('beep');
  });

  it('should hear 1st command "Please record the message, after signal"', () => {
    const spy = jest.fn();

    callMyFriend(spy);

    expect(spy.mock.calls[0][0]).toBe(
      'Please record the message, after signal'
    );
  });

  it('should hear 2nd command "beep"', () => {
    const spy = jest.fn();

    callMyFriend(spy);

    expect(spy.mock.calls[1][0]).toBe('beep');
  });
});
