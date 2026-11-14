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
		"content": `<style>.gkrgiyb5o {
  d: path("M5.125 6h10.75A2.625 2.625 0 0 1 18.5 8.625v10.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875V8.625A2.625 2.625 0 0 1 5.125 6M8 16.5l5-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4pzhdajg {
  d: path("M7 6V3.5a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-2");
}

.p8neq26ro {
  d: path("M6.75 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5-7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.x2zxbqbvi {
  d: path("M13 11.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.yzte2cnys {
  d: path("M5.5 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="l4pzhdajg"/><path class="gkrgiyb5o"/><path class="yzte2cnys"/><path class="p8neq26ro"/><path class="x2zxbqbvi"/></g>`,
		"fallback": "uix:xray-film",
	});
}

export default Component;
