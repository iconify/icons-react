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
		"content": `<style>.oe-98mb0w {
  d: path("M12 6v12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sjev68umd {
  d: path("M6 11v7");
}

.vdq8lyksd {
  d: path("M18 12v6");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="sjev68umd"/><path class="oe-98mb0w"/><path class="vdq8lyksd"/><path class="vhnbtvbtn"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:winsorize-outline-bold",
	});
}

export default Component;
