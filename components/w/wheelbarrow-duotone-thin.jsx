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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lw912obya {
  d: path("m18 9 3 3");
}

.o4zw09imi {
  fill: currentColor;
  d: path("M4 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p8jvazqdv {
  fill: currentColor;
  d: path("M4 8h14l-3 3H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r6xi4ylro {
  d: path("M4 8h14l-3 3H7Z");
}

.vm55gtbfg {
  d: path("M4 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xslwtfbwz {
  d: path("M15 11v6");
}
</style><g class="hntgybcog"><path class="p8jvazqdv"/><path class="o4zw09imi"/><path class="r6xi4ylro"/><path class="lw912obya"/><path class="vm55gtbfg"/><path class="xslwtfbwz"/></g>`,
		"fallback": "iconmind:wheelbarrow-duotone-thin",
	});
}

export default Component;
