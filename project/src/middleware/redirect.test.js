import {redirect} from './redirect.js';
import {redirectToRoute} from '../store/process/process-action.js';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../browser-history.js', () => ({
  get browserHistory () {
    return fakeHistory;
  },
}));


describe('Middleware: redirect', () => {
  it('Action chained forward next middleware', () => {
    const {next, invoke} = mockRedux();
    const action = redirectToRoute('/mylist');
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
  it('Route added to history', () => {
    const {invoke} = mockRedux();
    invoke(redirectToRoute('/favorites'));
    expect(fakeHistory.location.pathname).toBe('/favorites');

    invoke(redirectToRoute('/mylist'));
    expect(fakeHistory.location.pathname).toBe('/mylist');
  });
  it('Should not redirect if bad action', () => {
    const {invoke} = mockRedux();
    invoke({type: 'TEST_ACTION', payload: '/test_path'});
    expect(fakeHistory.location.pathname).not.toBe('/test_path');
  });
});
