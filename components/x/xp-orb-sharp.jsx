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
		"content": `<style>.htib3_9kq {
  d: path("m7 11l3 4m0-4l-3 4m5.5 0v-4h2.75v2.5H12.5m6.75-10.75l.21 1.54L21 4.5l-1.54.21l-.21 1.54l-.21-1.54l-1.54-.21l1.54-.21z");
}

.wkns6cb-k {
  cx: 11px;
  cy: 13px;
  r: 7.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="wkns6cb-k"/><path class="htib3_9kq"/></g>`,
		"fallback": "iconoven:xp-orb-sharp",
	});
}

export default Component;
