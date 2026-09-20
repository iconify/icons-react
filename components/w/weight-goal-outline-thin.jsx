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
		"content": `<style>.abso_jbuo {
  d: path("M12 12V3");
}

.gxgi15ggp {
  d: path("M12 3h7v5h-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtoa-gb3y {
  d: path("M3 14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vtoa-gb3y"/><path class="abso_jbuo"/><path class="gxgi15ggp"/></g>`,
		"fallback": "iconmind:weight-goal-outline-thin",
	});
}

export default Component;
