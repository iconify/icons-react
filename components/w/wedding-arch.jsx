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
		"content": `<style>.ac2f-b6rx {
  cx: 7.75px;
  cy: 5.5px;
  r: 1.25px;
}

.dn048f3af {
  d: path("M5.75 21.25v-6.5a6.25 6.25 0 0 1 12.5 0v6.5m-15.5 0h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ikirqmbyo {
  cx: 12px;
  cy: 4.25px;
  r: 1.5px;
}

.kas3djb3j {
  cx: 16.25px;
  cy: 5.5px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="dn048f3af"/><circle class="ikirqmbyo"/><circle class="ac2f-b6rx"/><circle class="kas3djb3j"/></g>`,
		"fallback": "iconoven:wedding-arch",
	});
}

export default Component;
