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
		"content": `<style>.fi55a390y {
  d: path("M3 11a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq4q_eqbj {
  d: path("M7.5 9.5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.s5cpnzbno {
  d: path("M16.5 16.5 21 21");
}
</style><g class="hntgybcog"><path class="fi55a390y"/><path class="jq4q_eqbj"/><path class="s5cpnzbno"/></g>`,
		"fallback": "iconmind:zoom-selection-outline-thin",
	});
}

export default Component;
