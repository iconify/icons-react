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

.iqxmkybol {
  d: path("M7 10a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.tr6mw0eac {
  d: path("M12 15v4");
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="iqxmkybol"/><path class="xedmbxbzm"/><path class="tr6mw0eac"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:webcam-outline-thin",
	});
}

export default Component;
