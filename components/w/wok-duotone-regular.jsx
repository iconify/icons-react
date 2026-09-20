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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3b6j7bvq {
  d: path("M20 10c2 0 2 -4 -1 -4");
}

.vt8fxebuz {
  d: path("M4 10h16l-6 6h-4Z");
}

.zev6zlbze {
  fill: currentColor;
  d: path("M4 10h16l-6 6h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zev6zlbze"/><path class="vt8fxebuz"/><path class="q3b6j7bvq"/></g>`,
		"fallback": "iconmind:wok-duotone-regular",
	});
}

export default Component;
