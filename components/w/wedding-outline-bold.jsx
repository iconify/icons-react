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
		"content": `<style>.b8yphbcwk {
  d: path("m10 7 2 -2 2 2 -2 2Z");
}

.nebfuhbln {
  d: path("M12 14a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x_1pk7qez {
  d: path("M4 14a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="s0phu2bbs"><path class="x_1pk7qez"/><path class="nebfuhbln"/><path class="b8yphbcwk"/></g>`,
		"fallback": "iconmind:wedding-outline-bold",
	});
}

export default Component;
