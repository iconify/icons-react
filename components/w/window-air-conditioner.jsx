import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vs0gngnxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6m-8-8v8m-9.5 0h19v6h-19Zm3.5 3h12M6.5 19.25l1.5 1.5l1.5-1.5m5 0l1.5 1.5l1.5-1.5");
}
</style><path class="vs0gngnxs"/>`,
		"fallback": "uix-sharp:window-air-conditioner",
	});
}

export default Component;
