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
		"content": `<style>.f95jrjjlt {
  fill: currentColor;
  d: path("M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28m124 100h-92v-24.11a76 76 0 1 0-8 0V204H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M60 104a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68");
}
</style><path class="f95jrjjlt"/>`,
		"fallback": "ph:webcam-thin",
	});
}

export default Component;
