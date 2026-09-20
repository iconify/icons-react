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
		"content": `<style>.c68dutvfq {
  d: path("M15 5h4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h4");
}

.h0r-78wsa {
  d: path("M17 10v4");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w28ybhbjm {
  d: path("M7 10v4");
}

.zzbcrubdh {
  fill: currentColor;
  d: path("M15 5h4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zzbcrubdh"/><path class="c68dutvfq"/><path class="w28ybhbjm"/><path class="h7bcztycq"/><path class="h0r-78wsa"/></g>`,
		"fallback": "iconmind:working-memory-duotone-thin",
	});
}

export default Component;
