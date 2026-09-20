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
		"content": `<style>.f73i47bnv {
  d: path("M9 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.g58rs14ba {
  d: path("M4 11a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qik8460ao {
  d: path("M5 21h14");
}

.vczbaybhl {
  fill: currentColor;
  d: path("M4 11a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zmp0zuf9j {
  fill: currentColor;
  d: path("M9 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="vczbaybhl"/><path class="zmp0zuf9j"/><path class="g58rs14ba"/><path class="f73i47bnv"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:weights-duotone-thin",
	});
}

export default Component;
