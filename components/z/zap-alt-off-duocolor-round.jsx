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
		"content": `<style>.nrj6p8qat {
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

.z6ob67bag {
  d: path("m12.5 15.5l-4.086 4.086c-.412.412-1.107.03-.98-.538l1.24-5.584A1.203 1.203 0 0 0 7.5 12a.975.975 0 0 1-.89-1.37l.313-.707M8.77 5.77l.703-1.581A2 2 0 0 1 11.3 3H15c.891 0 1.45.963 1.008 1.736l-2.016 3.528A1.16 1.16 0 0 0 15 10h1a.828.828 0 0 1 .586 1.414L16 12");
}
</style><g class="nrj6p8qat"><path class="sr6trvpei"/><path class="z6ob67bag"/></g>`,
		"fallback": "coolicons:zap-alt-off-duocolor-round",
	});
}

export default Component;
