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
		"content": `<style>.afxv9_b8a {
  d: path("M3 7h12a3 3 0 1 0 -3 -3");
}

.oq5d88tuy {
  d: path("M3 12h15");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x199_yb0z {
  d: path("M3 17h11a3 3 0 1 1 -3 3");
}
</style><g class="s0phu2bbs"><path class="afxv9_b8a"/><path class="oq5d88tuy"/><path class="x199_yb0z"/></g>`,
		"fallback": "iconmind:wind-outline-bold",
	});
}

export default Component;
