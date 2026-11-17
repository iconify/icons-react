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
		"content": `<style>.c0z9jcbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 10h-3.25a2 2 0 0 1-2-2V5c0-.661-.833-.952-1.245-.435l-6.26 7.87A.965.965 0 0 0 5 14h1.25a2 2 0 0 1 2 2v3c0 .661.833.952 1.245.435l.943-1.185M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}
</style><path class="c0z9jcbxh"/>`,
		"fallback": "coolicons:zap-map-pin-corner-round",
	});
}

export default Component;
