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
		"content": `<style>.hldrv0d4b {
  d: path("M11.5 12H15v3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3jwr8bmt {
  d: path("m9 18 6 -6");
}

.oz3eccbug {
  d: path("M7 8a5 5 0 0 1 10 0");
}

.vo1-lv2pt {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.vq4q60_me {
  fill: currentColor;
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="vq4q60_me"/><path class="vo1-lv2pt"/><path class="oz3eccbug"/><path class="o3jwr8bmt"/><path class="hldrv0d4b"/></g>`,
		"fallback": "iconmind:wishlist-share-duotone-regular",
	});
}

export default Component;
