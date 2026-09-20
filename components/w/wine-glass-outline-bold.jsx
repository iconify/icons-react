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
		"content": `<style>.i-2dnzb7m {
  d: path("M12 14v6");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.qrz8w7b5m {
  d: path("M6 4h12v4c0 4 -2.5 6 -6 6s-6 -2 -6 -6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="qrz8w7b5m"/><path class="i-2dnzb7m"/><path class="qdn88l2uv"/></g>`,
		"fallback": "iconmind:wine-glass-outline-bold",
	});
}

export default Component;
