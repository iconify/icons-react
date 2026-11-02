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
		"content": `<style>.vknv35b6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 16a3 3 0 1 0-6 0a3 3 0 0 0 6 0c0-4-2-6-2-9a4 4 0 1 1 8 0c0 4-2 6-2 10m0 0a4 4 0 1 0 8 0");
}
</style><path class="vknv35b6n"/>`,
		"fallback": "coolicons:zodiac-leo-round",
	});
}

export default Component;
