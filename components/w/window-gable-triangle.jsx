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
		"content": `<style>.ummw4xshg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 15.5l8.5-12l8.5 12m-16.25 0h15.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 19.75 21H4.25a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75M12 3.5v12M6.75 11h10.5");
}
</style><path class="ummw4xshg"/>`,
		"fallback": "uix:window-gable-triangle",
	});
}

export default Component;
