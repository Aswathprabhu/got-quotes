import CardsContainer from '../CardsContainer.vue';
import { render } from '@testing-library/vue';

describe('CardsContainer - Initial Render', () => {
  it('Initial render', () => {
    const { container } = render(CardsContainer);
    expect(container).toMatchSnapshot();
  });
});
