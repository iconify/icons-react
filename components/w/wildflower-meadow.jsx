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
		"content": `<style>.snfu0jf9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.5v-12a2 2 0 0 1-2-2v-2l2 1.25l2-1.25v2a2 2 0 0 1-2 2m-5.5 12v-6a2 2 0 0 1-2-2v-2l2 1.25l2-1.25v2a2 2 0 0 1-2 2m11 6v-5a2 2 0 0 1-2-2v-2l2 1.25l2-1.25v2a2 2 0 0 1-2 2m-15 5h19");
}
</style><path class="snfu0jf9y"/>`,
		"fallback": "uix-sharp:wildflower-meadow",
	});
}

export default Component;
