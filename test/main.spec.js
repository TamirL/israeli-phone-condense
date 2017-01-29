import {expect} from 'chai';
import israeliPhoneNormalize from '../src';

describe('Israeli Phone Normalize', () => {
  describe('exports', () => {
    it('should expose a default function', () => {
      expect(israeliPhoneNormalize).to.be.a('function');
    });
  });

  describe('logic', () => {
    it('should remove Israeli international prefix', () => {
      const normalized = israeliPhoneNormalize('+972521234567');

      expect(normalized).to.equal('0521234567');
    });

    it('should remove hyphen', () => {
      const normalized = israeliPhoneNormalize('052-1234567');

      expect(normalized).to.equal('0521234567');
    });

    it('should remove multiple hyphens', () => {
      const normalized = israeliPhoneNormalize('052-123-4567');

      expect(normalized).to.equal('0521234567');
    });

    it('should remove hyphens and Israeli international prefix', () => {
      const normalized = israeliPhoneNormalize('+972-52-123-4567');

      expect(normalized).to.equal('0521234567');
    });

    it('should remove irrelevant characters', () => {
      const normalized = israeliPhoneNormalize('(052) 123.4567 ');

      expect(normalized).to.equal('0521234567');
    });
  });
});