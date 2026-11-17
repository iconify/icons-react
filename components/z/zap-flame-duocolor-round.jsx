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
		"content": `<style>.n0u3ty-jh {
  stroke-opacity: 0.4;
  d: path("M13.667 15a1.333 1.333 0 1 0 2.666 0c0-1-.333-1.333-.666-2C15 11.667 15.333 10.333 17 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zu7enh9ql {
  d: path("m9.417 11.333l2.086-2.623A.643.643 0 0 0 11 7.667h-.833a1.333 1.333 0 0 1-1.334-1.334v-2a.466.466 0 0 0-.83-.29L3.83 9.29a.643.643 0 0 0 .503 1.043h.834c.736 0 1.333.597 1.333 1.334v2c0 .44.556.635.83.29zM17 9c.333 1.667 1.333 3 2.667 4c1 1 1.333 2.333 1.333 4a4 4 0 1 1-8 0c0-1 .333-1.667.667-2");
}
</style><g class="nrj6p8qat"><path class="n0u3ty-jh"/><path class="zu7enh9ql"/></g>`,
		"fallback": "coolicons:zap-flame-duocolor-round",
	});
}

export default Component;
