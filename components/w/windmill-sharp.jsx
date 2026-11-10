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
		"content": `<style>.duhih0b2e {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 22H6M6 22H18M6 22L7 18M18 22H23M18 22L17 18M7 18L8.071 13.72M7 18H17M17 18L15.929 13.72M12 5.22L15.445 2L18.217 4.54L14.756 8L18.202 11.45L15.445 14.2L12 10.76L8.554 14.2L5.798 11.45L9.244 8L5.798 4.55L8.554 2L12 5.22Z");
}
</style><path class="duhih0b2e"/>`,
		"fallback": "keyline-icons:windmill-sharp",
	});
}

export default Component;
