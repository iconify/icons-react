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
		"content": `<style>.fqfpa7bwx {
  d: path("M17.4 16.48h-5.39c-.99 0-1.76.85-2.23 1.71A3.6 3.6 0 0 1 3 16.5c.01-.63.18-1.26.51-1.8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rgf3glbhv {
  d: path("m12 6.6l2.82 5.16c.47.87 1.59 1.14 2.58 1.14a3.6 3.6 0 0 1 0 7.2");
}

.t2g-sibgb {
  d: path("m6.6 16.5l2.82-5.2c.48-.87.09-1.96-.45-2.79a3.6 3.6 0 1 1 6.2-3.66");
}
</style><g class="hntgybcog"><path class="fqfpa7bwx"/><path class="t2g-sibgb"/><path class="rgf3glbhv"/></g>`,
		"fallback": "iconoven:webhook",
	});
}

export default Component;
