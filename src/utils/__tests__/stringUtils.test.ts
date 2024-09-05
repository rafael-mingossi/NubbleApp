import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitaliseFirstLetter', () => {
    it('should capitalise the first letter of each word', () => {
      expect(stringUtils.capitaliseFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitaliseFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitaliseFirstLetter('maria')).toBe('Maria');
      expect(stringUtils.capitaliseFirstLetter('Ana MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitaliseFirstLetter('Ana mariA')).toBe('Ana Maria');
    });

    it('should remove spaces (leading/trailing) at the beginning and end of words', () => {
      expect(stringUtils.capitaliseFirstLetter(' Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitaliseFirstLetter('Ana maria ')).toBe('Ana Maria');
    });
  });
});
