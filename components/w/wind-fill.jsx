import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ho74xb87e {
  fill: currentColor;
  d: path("M120 104H24a8 8 0 0 1-8-8.53A8.17 8.17 0 0 1 24.27 88H112a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H92.29a4 4 0 0 1-4-4.58A32 32 0 1 1 120 104m119.92-2.29a32 32 0 0 0-63.59-2.29a4 4 0 0 0 4 4.58h19.44a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H32.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h176a32 32 0 0 0 31.92-34.29M152 152H40.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h103.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-19.69a4 4 0 0 0-4 4.58A32 32 0 1 0 152 152");
}
</style><path class="ho74xb87e"/>`,
		"fallback": "ph:wind-fill",
	});
}

export default Component;
