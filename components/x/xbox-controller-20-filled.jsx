import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s67qs46ig {
  fill: currentColor;
  d: path("M8.334 4.711a2.12 2.12 0 0 0-1.35-.17l-.895.17a2.37 2.37 0 0 0-1.665 1.245c-1.11 2.165-1.944 3.932-2.27 5.437c-.336 1.544-.147 2.86.82 4.061c.654.813 1.8.65 2.399-.026c.467-.527.997-1.136 1.512-1.732A2.01 2.01 0 0 1 8.405 13h3.186a2.01 2.01 0 0 1 1.519.697a203 203 0 0 0 1.513 1.732c.598.676 1.744.838 2.398.025c.967-1.2 1.156-2.517.82-4.06c-.326-1.506-1.16-3.273-2.27-5.438a2.37 2.37 0 0 0-1.665-1.245l-.894-.17a2.12 2.12 0 0 0-1.351.17l-.058.029c-.327.167-.672.26-1.014.26H9.406a2.24 2.24 0 0 1-1.014-.26zM10 8.5A.75.75 0 1 1 10 7a.75.75 0 0 1 0 1.5");
}
</style><path class="s67qs46ig"/>`,
		"fallback": "fluent:xbox-controller-20-filled",
	});
}

export default Component;
