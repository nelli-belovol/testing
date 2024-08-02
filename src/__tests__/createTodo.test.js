import { mockTodo } from '../__mocks__/todos.mock';
import { createTodo, createTodoOnServer } from '../createTodo';

const mockedV4 = jest.fn(() => '1234567890');

jest.mock('uuid', () => ({
  ...jest.requireActual('uuid'),
  v4: () => mockedV4(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodo),
  }),
);

describe('createTodo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return todo object with provided title, completed and id', () => {
    const title = 'learn react';
    const result = createTodo(title);

    const expectedResult = {
      id: '1234567890',
      title,
      completed: false,
    };
    expect(mockedV4).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should call create todo on server', async () => {
    const result = await createTodoOnServer('My todo');

    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if there is a network error', async () => {
    fetch.mockRejectedValueOnce('Network error');

    await expect(createTodoOnServer('My todo')).rejects.toMatch(
      'Network error',
    );
  });

  it('should throw an error from fn when response not ok ', async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    // await expect(createTodoOnServer('My todo')).rejects.toMatch(
    //   'Cannot create todo',
    // );
    await expect(createTodoOnServer('My todo')).rejects.toThrow(
      'Cannot create todo',
    );
  });

  //проверка на пустой аргумент

  // it('should thow an error when no valid title is provided', () => {
  //   const fnToThrow = () => createTodoOnServer('');
  //   expect(fnToThrow).rejects.toThrow('Title is required');
  // });

  //ИЛИ

  it('should thow an error when no valid title is provided', done => {
    try {
      createTodo('');
      done('createTodo should throw an error for valid values');
    } catch (error) {
      expect(error.message).toBe('Title is required');
      done();
    }
  });
});
