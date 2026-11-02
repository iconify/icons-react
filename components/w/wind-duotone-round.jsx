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
		"content": `<style>.ynwhame1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h8a2 2 0 1 0 0-4M3 17h11a2 2 0 1 1 0 4M3 12h15a3 3 0 0 0 0-6");
}
</style><path class="ynwhame1f"/>`,
		"fallback": "coolicons:wind-duotone-round",
	});
}

export default Component;
