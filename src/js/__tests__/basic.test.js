import GameSavingLoader from '../GameSavingLoader';

test('class "GameSavingLoader" exists and has "load" method', () => {
  expect(GameSavingLoader).toBeDefined();
  expect(GameSavingLoader.load).toBeDefined();
});

test('"load" method of class "GameSavingLoader" works correctly', async () => {
  const expectation = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual(expectation);
});
