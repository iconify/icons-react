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
		"content": `<style>.ehqeh5b9h {
  d: path("m7 10l-2 2c-.369.369.262 1 1 1h2a2 2 0 0 1 2 2v4c0 .738.631 1.369 1 1l3-3m3-3l2-2c.369-.369-.262-1-1-1h-2a2 2 0 0 1-2-2V5c0-.738-.631-1.369-1-1l-3 3");
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
</style><g class="nrj6p8qat"><path class="sr6trvpei"/><path class="ehqeh5b9h"/></g>`,
		"fallback": "coolicons:zap-off-duocolor-round",
	});
}

export default Component;
