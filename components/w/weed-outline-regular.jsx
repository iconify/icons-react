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
		"content": `<style>.j2d9j4b0r {
  d: path("M12 12 8 8h4L8 4");
}

.miurf-h0g {
  d: path("M5 18h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrwm8uaph {
  d: path("M12 4v14");
}
</style><g class="nrj6p8qat"><path class="rrwm8uaph"/><path class="j2d9j4b0r"/><path class="miurf-h0g"/></g>`,
		"fallback": "iconmind:weed-outline-regular",
	});
}

export default Component;
