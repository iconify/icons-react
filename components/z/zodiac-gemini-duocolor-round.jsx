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
		"content": `<style>.cij2gvuxr {
  stroke-opacity: 0.4;
  d: path("M7 5v14M17 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u3zzgdblm {
  d: path("M3 3a15.81 15.81 0 0 0 18 0M3 21a15.81 15.81 0 0 1 18 0");
}
</style><g class="nrj6p8qat"><path class="cij2gvuxr"/><path class="u3zzgdblm"/></g>`,
		"fallback": "coolicons:zodiac-gemini-duocolor-round",
	});
}

export default Component;
