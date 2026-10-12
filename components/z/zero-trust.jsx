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
		"content": `<style>.crtn3268u {
  width: 8px;
  height: 6.5px;
  x: 8px;
  y: 11px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.e81-4ejwc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.16 3.31a9.25 9.25 0 0 1 5.53 5.53m0 6.32a9.25 9.25 0 0 1-5.53 5.53m-6.32 0a9.25 9.25 0 0 1-5.53-5.53m0-6.32a9.25 9.25 0 0 1 5.53-5.53");
}

.j7vio8fah {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.25h.01");
}

.l1k8tdb_r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 11V9.25a2.25 2.25 0 0 1 4.5 0V11");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="e81-4ejwc"/><rect class="crtn3268u"/><path class="l1k8tdb_r"/><path class="j7vio8fah"/></g>`,
		"fallback": "iconoven:zero-trust",
	});
}

export default Component;
