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
		"content": `<style>.chh9m8bfh {
  fill: currentColor;
  d: path("M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z");
  stroke: none;
}

.ex22uac-g {
  d: path("M9.3333 15.0186C10.0667 14.3626 11.0161 14 12 14C12.9839 14 13.9333 14.3626 14.6667 15.0186");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ex22uac-g"/><path class="chh9m8bfh"/></g>`,
		"fallback": "keyline-icons:wifi-low-fill",
	});
}

export default Component;
