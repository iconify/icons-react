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
		"content": `<style>.hx7cfzbbm {
  d: path("M6 21c0 -6 2 -12 6 -12s6 6 6 12");
}

.l6rp-_-ny {
  d: path("M10 21c0 -6 1 -12 2 -12");
}

.mww7ccc2b {
  d: path("M14 21c0 -6 -1 -12 -2 -12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z_j864liq {
  d: path("M12 2v7");
}
</style><g class="nrj6p8qat"><path class="z_j864liq"/><path class="hx7cfzbbm"/><path class="l6rp-_-ny"/><path class="mww7ccc2b"/></g>`,
		"fallback": "iconmind:whisk-outline-regular",
	});
}

export default Component;
