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
		"content": `<style>.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg0zcpbnj {
  d: path("M12 5.75v12.5M12 8c-2-.75-4-.5-5.25.75M12 8c2-.75 4-.5 5.25.75M12 11.25c-2-.75-4-.5-5.25.75m5.25-.75c2-.75 4-.5 5.25.75M12 14.5c-1.75-.6-3.5-.4-4.5.6m4.5-.6c1.75-.6 3.5-.4 4.5.6");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="vg0zcpbnj"/></g>`,
		"fallback": "iconoven:x-ray",
	});
}

export default Component;
