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
		"content": `<style>.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nj-oiubfo {
  d: path("M8 7v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sunqexbsa {
  d: path("M16 7v10");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="nrj6p8qat"><path class="murw5tb-p"/><path class="nj-oiubfo"/><path class="sunqexbsa"/><path class="x26a8iq1c"/></g>`,
		"fallback": "iconmind:wide-table-outline-regular",
	});
}

export default Component;
