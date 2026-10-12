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
		"content": `<style>.cgifldh5d {
  d: path("m17.5 10.5l3.75-1.75M17.5 12h3.75m-3.75 1.5l3.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9r89ccbw {
  width: 5.5px;
  height: 4.5px;
  x: 10.25px;
  y: 9.75px;
  rx: 1.25px;
}

.ynf6gdd5u {
  d: path("M2.75 18.25C7.25 18.25 6 12 10.5 12");
}
</style><g class="hntgybcog"><path class="ynf6gdd5u"/><rect class="w9r89ccbw"/><path class="cgifldh5d"/></g>`,
		"fallback": "iconoven:wire",
	});
}

export default Component;
