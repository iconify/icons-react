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
		"content": `<style>.t3yt3ga0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 10h-4.25a1 1 0 0 1-1-1V4a.35.35 0 0 0-.623-.217l-7.504 9.434A.482.482 0 0 0 4 14h3.25a1 1 0 0 1 1 1v5c0 .33.417.476.623.217l1.565-1.967M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}
</style><path class="t3yt3ga0j"/>`,
		"fallback": "coolicons:zap-map-pin-corner",
	});
}

export default Component;
