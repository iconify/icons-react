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
		"content": `<style>.i-83p_bua {
  d: path("M12 4v12m-6 0L18 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="nrj6p8qat"><path class="i-83p_bua"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:winter-outline-regular",
	});
}

export default Component;
