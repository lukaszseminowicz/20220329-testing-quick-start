/**
 * Czasem testując implementację jakiejś logiki,
 * musimy wykonać obiekt pomocniczy, tzw. Mocka.
 *
 * Imituje on zachowanie prawdziwego obiektu, a dodatkowo odpowiada na pytanie: jak został użyty
 * np. wewnątrz naszej logiki.
 *
 *
 * */

describe('221 how to test Outer dependencies? (snakeGame)', () => {
  describe('snakeGame', () => {
    function snakeGame(snakeService, musicService) {
      console.log('Welcome to Snake Game !');
      snakeService.start([10, 20]);
      musicService.play();
    }

    it('should start snake and play music when called', () => {
      const mockSnakeService = {
        start: jest.fn(),
      };
      const mockMusicService = {
        play: jest.fn(),
      };

      snakeGame(mockSnakeService, mockMusicService);

      expect(mockMusicService.play).toHaveBeenCalled();
      expect(mockSnakeService.start).toHaveBeenCalled();
    });

    it('should start the snake form same position [10, 20] each time game called', () => {
      const mockSnakeService = {
        start: jest.fn(),
      };
      const fakeMusicService = { play() {} };

      snakeGame(mockSnakeService, fakeMusicService);
      snakeGame(mockSnakeService, fakeMusicService);
      snakeGame(mockSnakeService, fakeMusicService);

      expect(mockSnakeService.start).toHaveBeenNthCalledWith(1, [10, 20]);
      expect(mockSnakeService.start).toHaveBeenNthCalledWith(2, [10, 20]);
      expect(mockSnakeService.start).toHaveBeenNthCalledWith(3, [10, 20]);
    });
  });
});
