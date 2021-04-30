import React from 'react';
import { mount } from 'enzyme';
import Page from '../index';

describe('Pages', () => {
  describe('Index', () => {
    let wrap = null;
    beforeEach(async () => {
      wrap = mount(<Page />);
    });

    it('should have h4 welcome title', function() {
      expect(wrap.find('[alt=""]'));
    });
  });
});
