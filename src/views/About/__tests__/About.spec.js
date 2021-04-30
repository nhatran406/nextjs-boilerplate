import * as React from 'react';
import { shallow } from 'enzyme';
import View from '../About';

jest.mock('next/router', () => ({ push: jest.fn() }));

describe('Views', () => {
  describe('About', () => {
    let wrap = null;
    beforeEach(async () => {
      wrap = shallow(<View />);
    });
    it('should have a logo at footer', function() {
      expect(wrap.find('[alt="logo"]'));
    });
  });
});
