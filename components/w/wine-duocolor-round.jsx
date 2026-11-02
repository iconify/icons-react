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

.qf24h3b2e {
  d: path("M9 3h6c1.5 3.5 2 5.5 2 7a5 5 0 0 1-10 0c0-1.5.5-3.5 2-7m3 12v6m-4 0h8");
}

.s72q8wbtp {
  stroke-opacity: 0.4;
  d: path("M7 10h10");
}
</style><g class="nrj6p8qat"><path class="s72q8wbtp"/><path class="qf24h3b2e"/></g>`,
		"fallback": "coolicons:wine-duocolor-round",
	});
}

export default Component;
