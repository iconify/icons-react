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
		"content": `<style>.b2w35-w9a {
  fill: currentColor;
  d: path("M3 10a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
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

.uv_v7wb2g {
  d: path("M14 12h5");
}

.w5cj-6boi {
  d: path("M3 10a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="b2w35-w9a"/><path class="w5cj-6boi"/><path class="uv_v7wb2g"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:zero-shot-duotone-regular",
	});
}

export default Component;
