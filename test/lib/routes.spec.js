const {expect} = require('chai');

const Routes = require('../../lib/routes');

describe('Routes test file', () => {
  context('routes', () => {
    const routes = new Routes();

    it('should return an array on call add', () => {
      const result = routes.add();
      expect(result).to.be.instanceOf(Routes);
    });

    it('call add with a path, routes has path as property', () => {
      const path = '/';
      const result = routes.add(path);
      expect(result).to.has.property(path);
    });

    it('call add with a execution, routes property associate with a execution be a function', () => {
      const path = '/';
      const exec = () => {};
      const result = routes.add(path, exec);
      expect(result[path]).to.be.an('function');
    });
  });
});
