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
		"content": `<style>.kr2jj1hkc {
  fill: currentColor;
  d: path("M10 3h4v5h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp_u7qguw {
  d: path("M14 6c4 1 7 3 7 6 0 4 -4 6 -9 6s-9 -2 -9 -6c0 -3 3 -5 7 -6");
}

.vcln6n2xe {
  d: path("M10 3h4v5h-4Z");
}
</style><g class="nrj6p8qat"><path class="kr2jj1hkc"/><path class="pp_u7qguw"/><path class="vcln6n2xe"/></g>`,
		"fallback": "iconmind:wristband-duotone-regular",
	});
}

export default Component;
