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
		"content": `<style>.bn06y9blz {
  d: path("M7.75 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.fozkzubxj {
  d: path("M6 9.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.tgx030-6f {
  d: path("M3 2.5h18v19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yv170_97h {
  d: path("M15 14.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9.5 9.5l5 5");
}
</style><g class="ulnmmdpxh"><path class="tgx030-6f"/><path class="fozkzubxj"/><path class="bn06y9blz"/><path class="yv170_97h"/></g>`,
		"fallback": "uix-sharp:xray",
	});
}

export default Component;
