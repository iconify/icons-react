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
		"content": `<style>.az1hpy9gr {
  d: path("M12 9v12");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rzvp5cbis {
  fill: currentColor;
  d: path("m6 6 3 -3h3v6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t6hbaucfr {
  d: path("m6 6 3 -3h3v6H9Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="nrj6p8qat"><path class="rzvp5cbis"/><path class="az1hpy9gr"/><path class="xslfg2evh"/><path class="t6hbaucfr"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:wind-vane-duotone-regular",
	});
}

export default Component;
