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
		"content": `<style>.jtt0fvy7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18c3.5 4.5 10.5 4.5 14 0c-3.5-4.5-10.5-4.5-14 0Zm7 0h.01M12 11.75v-5m-2.5 2.5l2.5-2.5l2.5 2.5M4 3.5h16");
}
</style><path class="jtt0fvy7v"/>`,
		"fallback": "uix-sharp:worms-eye-view",
	});
}

export default Component;
