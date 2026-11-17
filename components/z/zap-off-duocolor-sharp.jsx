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
		"content": `<style>.huu624itn {
  d: path("M16.342 13.342L19 10h-5.25V3l-3.434 4.316m-2.658 3.342L5 14h5.25v7l3.434-4.316");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sr6trvpei {
  stroke-opacity: 0.4;
  d: path("m2 5l17 17");
}
</style><g class="nrj6p8qat"><path class="sr6trvpei"/><path class="huu624itn"/></g>`,
		"fallback": "coolicons:zap-off-duocolor-sharp",
	});
}

export default Component;
