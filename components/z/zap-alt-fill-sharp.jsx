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
		"content": `<style>.i8z4sab7d {
  fill: currentColor;
  d: path("M17 2a1 1 0 0 1 .868 1.496L14.723 9H18a1.002 1.002 0 0 1 .707 1.707l-11 11a1 1 0 0 1-1.683-.924L7.753 13H6a1 1 0 0 1-.914-1.406l4-9C9.247 2.233 9.605 2 10 2Z");
}
</style><path class="i8z4sab7d"/>`,
		"fallback": "coolicons:zap-alt-fill-sharp",
	});
}

export default Component;
