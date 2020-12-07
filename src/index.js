import { render, destroy } from './utils/renderer';

const data = {
    name: 'World'
};

render(data);

if (module.hot) {
    module.hot.accept();
    destroy();
    render(data);
}
