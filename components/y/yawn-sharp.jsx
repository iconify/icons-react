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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.smnsbpz0c {
  d: path("m7.5 9.5l1.375 1.1l1.375-1.1m3.5 0l1.375 1.1L16.5 9.5M12 13c1.65 0 2.75 1.3 2.75 2.9s-1.1 2.85-2.75 2.85s-2.75-1.25-2.75-2.85S10.35 13 12 13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="smnsbpz0c"/></g>`,
		"fallback": "iconoven:yawn-sharp",
	});
}

export default Component;
