import axios from 'axios';
import { getTodos } from '../getTodos';

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return an empty array in case of error and print the error in the console', () => {
    async () => {
      const errMessage = 'error';

      // axiosSpy.getMockImplementationOnce(() => {
      //   Promise.reject(errMessage);
      // });

      axiosSpy.mockRejectedValueOnce(errMessage);

      const result = await getTodos();

      expect(errorSpy).toHaveBeenCalledWith(errMessage);

      expect(result).toEqual([]);
    };
  });
  it('should return 200 todos using axios get', () => {
    async () => {
      const result = await getTodos();

      expect(result).toHaveLength(200);
    };
  });
});
