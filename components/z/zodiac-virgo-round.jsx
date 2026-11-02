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
		"content": `<style>.rup412bil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3a2 2 0 0 1 2 2v10M6 5a2 2 0 1 1 4 0v10m0-10a2 2 0 1 1 4 0v10m0 0a6 6 0 0 0 6 6m-6-8a3 3 0 0 1 6 0v2a6 6 0 0 1-6 6");
}
</style><path class="rup412bil"/>`,
		"fallback": "coolicons:zodiac-virgo-round",
	});
}

export default Component;
