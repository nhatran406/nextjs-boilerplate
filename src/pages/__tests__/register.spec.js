import React from 'react';
import { shallow } from 'enzyme';
import Page from '../register';

describe('Pages', () => {
  describe('Home', () => {
    let wrap = null;
    beforeEach(async () => {
      wrap = shallow(<Page />);
    });
    it('should have a logo at footer', function() {
      expect(wrap.find('[alt="Branding logo"]'));
    });
  });
});
