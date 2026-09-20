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

.osgxtfl6n {
  d: path("M3 6a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.sdxd6sb1r {
  d: path("M7 11v5.5h6");
}

.utktsvfze {
  d: path("M13 15a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="osgxtfl6n"/><path class="sdxd6sb1r"/><path class="utktsvfze"/></g>`,
		"fallback": "iconmind:workflow-outline-thin",
	});
}

export default Component;
