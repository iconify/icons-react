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
		"content": `<style>.a-_fbgbci {
  d: path("M10.75 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.m2e6babgl {
  d: path("M2.5 10h19v11h-19Z");
}

.qc7u9l3jg {
  d: path("m5 10l7 5l7-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgxhjbxf {
  d: path("M6.25 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="m2e6babgl"/><path class="qc7u9l3jg"/><path class="zdgxhjbxf"/><path class="a-_fbgbci"/></g>`,
		"fallback": "uix-sharp:wedding-invitation",
	});
}

export default Component;
