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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.f-g2d4bkj {
  d: path("M8 17h10");
}

.j5qohtzrk {
  d: path("M6 7h10");
}

.ni9hkh8dk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 17h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uobmn7udv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x4g1i6w7b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 7h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="x4g1i6w7b"/><path class="uobmn7udv"/><path class="ni9hkh8dk"/><path class="j5qohtzrk"/><path class="ae-e09b3w"/><path class="f-g2d4bkj"/></g>`,
		"fallback": "iconmind:wind-gust-duotone-regular",
	});
}

export default Component;
