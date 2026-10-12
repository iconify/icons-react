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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q92kr5klm {
  d: path("m7.7 20.53l1.6-5.81q.2-.72.95-.72h3.5q.75 0 .95.72l1.6 5.81q.2.72-.55.72h-7.5q-.75 0-.55-.72");
}

.zqx93buiv {
  d: path("M11 21.25v-2a1 1 0 0 1 2 0v2M8.25 3.75l7.5 7.5m0-7.5l-7.5 7.5M12 7.5V14");
}
</style><g class="hntgybcog"><path class="q92kr5klm"/><path class="zqx93buiv"/></g>`,
		"fallback": "iconoven:windmill",
	});
}

export default Component;
