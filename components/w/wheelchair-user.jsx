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
		"content": `<style>.a7-6__szj {
  d: path("M8.38 11.33a5 5 0 1 0 5.79 4.05");
}

.ard1fccgb {
  d: path("M10.5 8.5v4.75h5.25l2 5.25h2.5m-9.75-8.25h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olg4f6bbi {
  cx: 11px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="olg4f6bbi"/><path class="ard1fccgb"/><path class="a7-6__szj"/></g>`,
		"fallback": "iconoven:wheelchair-user",
	});
}

export default Component;
