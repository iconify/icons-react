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
		"content": `<style>.h66tg3bvx {
  d: path("M6 6h6l6 6 -6 6H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe-98mb0w {
  d: path("M12 6v12");
}

.uw5kuce7r {
  d: path("M3 3v18");
}
</style><g class="hntgybcog"><path class="uw5kuce7r"/><path class="h66tg3bvx"/><path class="oe-98mb0w"/></g>`,
		"fallback": "iconmind:windsock-outline-thin",
	});
}

export default Component;
