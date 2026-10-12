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
		"content": `<style>.a-e-swtkn {
  d: path("M12 12.25v3m-9.25 0h18.5m-16.5 0v6m14.5-6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vv3by8wrj {
  width: 13.5px;
  height: 9.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="vv3by8wrj"/><path class="a-e-swtkn"/></g>`,
		"fallback": "iconoven:workspace",
	});
}

export default Component;
