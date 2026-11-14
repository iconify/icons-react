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
		"content": `<style>.g2py13-0p {
  d: path("M4 14.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivl8kwbsj {
  d: path("M10 14.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M7.483 5.033l.432-.862A1.21 1.21 0 0 1 9 3.5a1.21 1.21 0 0 1 1.085.671l.432.862a1.5 1.5 0 0 1-.281 1.731L10 7a1.414 1.414 0 0 1-2 0l-.236-.236a1.5 1.5 0 0 1-.281-1.731");
}
</style><g class="hntgybcog"><path class="g2py13-0p"/><path class="ivl8kwbsj"/></g>`,
		"fallback": "uix:wedding-insurance",
	});
}

export default Component;
