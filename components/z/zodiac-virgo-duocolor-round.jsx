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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u3i-esblo {
  stroke-opacity: 0.4;
  d: path("M14 15a6 6 0 0 0 6 6m-6-8a3 3 0 0 1 6 0v2a6 6 0 0 1-6 6");
}

.xlg6vbbdi {
  d: path("M4 3a2 2 0 0 1 2 2v10M6 5a2 2 0 1 1 4 0v10m0-10a2 2 0 1 1 4 0v10");
}
</style><g class="nrj6p8qat"><path class="u3i-esblo"/><path class="xlg6vbbdi"/></g>`,
		"fallback": "coolicons:zodiac-virgo-duocolor-round",
	});
}

export default Component;
