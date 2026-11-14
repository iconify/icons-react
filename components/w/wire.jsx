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
		"content": `<style>.g6ug-dbgu {
  d: path("M2.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.h-ormzb6m {
  d: path("M5 7.5c0 7.5 14 1.5 14 9");
}

.h9jznno7o {
  d: path("M16.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g6ug-dbgu"/><path class="h-ormzb6m"/><path class="h9jznno7o"/></g>`,
		"fallback": "uix:wire",
	});
}

export default Component;
