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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-83p_bua {
  d: path("M12 4v12m-6 0L18 4");
}

.qe5qimb4v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v12m-6 0L18 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="qe5qimb4v"/><path class="bt_2bvgpa"/><path class="i-83p_bua"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:winter-duotone-thin",
	});
}

export default Component;
