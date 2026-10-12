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
		"content": `<style>.c7ctqnbzi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8.75h.01m5.49-2h.01M16 10h.01");
}

.cltncobrv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 11.5a8.75 8 0 0 1 17.5 0a1.25 1.25 0 0 1-1.25 1.25h-15a1.25 1.25 0 0 1-1.25-1.25M9 15h6l.5 4.5a1.5 1.5 0 0 1-1.5 1.75h-4a1.5 1.5 0 0 1-1.5-1.75Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="cltncobrv"/><path class="c7ctqnbzi"/></g>`,
		"fallback": "iconoven:wild-mushrooms",
	});
}

export default Component;
