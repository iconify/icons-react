import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bp3nwdp9d {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M64 24.3c-21.92 0-39.69 17.78-39.69 39.71S42.08 103.7 64 103.7s39.69-17.77 39.69-39.69S85.92 24.3 64 24.3");
}
</style><path class="bp3nwdp9d"/>`,
		"fallback": "noto-v1:white-circle",
	});
}

export default Component;
