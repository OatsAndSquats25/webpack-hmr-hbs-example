import { render, destroy } from './utils/renderer';
import data from './data/couponData.json'

render(data);

if (module.hot) {
    module.hot.accept();
    destroy();
    render(data);
}
