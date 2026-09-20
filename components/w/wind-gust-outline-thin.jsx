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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.f-g2d4bkj {
  d: path("M8 17h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5qohtzrk {
  d: path("M6 7h10");
}
</style><g class="hntgybcog"><path class="j5qohtzrk"/><path class="ae-e09b3w"/><path class="f-g2d4bkj"/></g>`,
		"fallback": "iconmind:wind-gust-outline-thin",
	});
}

export default Component;
