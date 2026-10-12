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
		"content": `<style>.anfakeb6t {
  d: path("M3.25 8.25h17.5M9 8.25v4.25m0 2v6.25m6-12.5v4.25m0 2v6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-ogpjbmk {
  width: 6px;
  height: 4px;
  x: 9px;
  y: 11.5px;
  rx: 1px;
}

.luxaszu4f {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="luxaszu4f"/><path class="anfakeb6t"/><rect class="i-ogpjbmk"/></g>`,
		"fallback": "iconoven:week-view",
	});
}

export default Component;
