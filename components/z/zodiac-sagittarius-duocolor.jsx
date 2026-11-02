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
		"content": `<style>.jvopqdb9p {
  stroke-opacity: 0.4;
  d: path("M14 3h7v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u0zn-1eit {
  d: path("M3 21L21 3M6 12l6 6");
}
</style><g class="nrj6p8qat"><path class="jvopqdb9p"/><path class="u0zn-1eit"/></g>`,
		"fallback": "coolicons:zodiac-sagittarius-duocolor",
	});
}

export default Component;
