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
		"content": `<style>.filuri95n {
  d: path("M8 4v8m-4 0 8 -8");
}

.g7rxpleju {
  d: path("M4 20h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p9fnnqwai {
  d: path("M4 16h11a3 3 0 1 1 -3 3");
}
</style><g class="hntgybcog"><path class="filuri95n"/><path class="p9fnnqwai"/><path class="g7rxpleju"/></g>`,
		"fallback": "iconmind:wind-chill-outline-thin",
	});
}

export default Component;
