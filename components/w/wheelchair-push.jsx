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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhynk8bly {
  d: path("M12 17.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.q65kiyboi {
  d: path("M3.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5l.5 6l-1.5 6.5M6 14l2 6.5m-2.25-11H11M11 8l1.5 6.5H19l1.5 4.5");
}
</style><g class="hntgybcog"><path class="q65kiyboi"/><path class="lhynk8bly"/></g>`,
		"fallback": "uix:wheelchair-push",
	});
}

export default Component;
