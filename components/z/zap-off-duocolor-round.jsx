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

.tcda3bczp {
  d: path("m7.658 10.658l-1.413 1.777A.965.965 0 0 0 7 14h1.25a2 2 0 0 1 2 2v3c0 .661.833.952 1.245.435l2.189-2.751m2.658-3.342l1.413-1.777A.965.965 0 0 0 17 10h-1.25a2 2 0 0 1-2-2V5c0-.661-.833-.952-1.245-.435l-2.189 2.751");
}
</style><g class="nrj6p8qat"><path class="sr6trvpei"/><path class="tcda3bczp"/></g>`,
		"fallback": "coolicons:zap-off-duocolor-round",
	});
}

export default Component;
