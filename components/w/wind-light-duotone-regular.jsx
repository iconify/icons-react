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
		"content": `<style>.byz9m5b8d {
  d: path("M3 8h16");
}

.h66fqzc-a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 15h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.heiwcobjg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nx6-lsb9m {
  d: path("M5 15h16");
}
</style><g class="nrj6p8qat"><path class="heiwcobjg"/><path class="h66fqzc-a"/><path class="byz9m5b8d"/><path class="nx6-lsb9m"/></g>`,
		"fallback": "iconmind:wind-light-duotone-regular",
	});
}

export default Component;
