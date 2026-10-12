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
		"content": `<style>.yd5-i7btd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.75c2.35 0 4.25 3.25 4.25 7.25s-1.9 7.25-4.25 7.25S4.25 16 4.25 12s1.9-7.25 4.25-7.25ZM17.25 8q.48 3.52 4 4q-3.52.48-4 4q-.48-3.52-4-4q3.52-.48 4-4Z");
}
</style><path class="yd5-i7btd"/>`,
		"fallback": "iconoven:zero-shot-sharp",
	});
}

export default Component;
