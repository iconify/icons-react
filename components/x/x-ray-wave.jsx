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
		"content": `<style>.o46tho0ro {
  d: path("M2.5 12C4 8 5.75 8 7.25 12s3.25 4 4.75 0s3.25-4 4.75 0s3.25 4 4.75 0");
}

.rocslgbmd {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o46tho0ro"/><path class="rocslgbmd"/></g>`,
		"fallback": "uix-sharp:x-ray-wave",
	});
}

export default Component;
