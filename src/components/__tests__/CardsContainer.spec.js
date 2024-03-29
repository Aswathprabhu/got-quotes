import CardsContainer from '../CardsContainer.vue';
import { render, waitForElementToBeRemoved } from '@testing-library/vue';
import { makeServer } from '../../server';

describe('CardsContainer - Initial Render', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('Initial Render', async () => {
    server.createList('quote', 2);
    const { getAllByTestId } = render(CardsContainer, {
      mocks: {
        $route: {
          params: { id: '2' },
        },
      },
    });
    let loaders = getAllByTestId('loader');
    expect(loaders.length).toBe(2);
  });

  it('After Data', async () => {
    server.createList('quote', 2);
    const { getAllByTestId } = render(CardsContainer, {
      mocks: {
        $route: {
          params: { id: '2' },
        },
      },
    });
    await waitForElementToBeRemoved(() => getAllByTestId('loader')[0]);
    const dataCards = getAllByTestId('data-card');
    expect(dataCards.length).toBe(2);
  });

  it('Check if UI doesnt break for invalid data', async () => {
    server.createList('quote', {
      character: {},
    });
    const { getAllByTestId } = render(CardsContainer);
    await waitForElementToBeRemoved(() => getAllByTestId('loader')[0]);
    const dataCards = getAllByTestId('data-card');
    expect(dataCards.length).toBe(1);
  });
});
