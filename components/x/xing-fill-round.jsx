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
		"content": `<style>.f69gr9b9v {
  fill: currentColor;
  d: path("m18.878 3.479l-5.733 10.51l3.723 6.515a1 1 0 1 1-1.736.992l-4-7a1 1 0 0 1-.01-.975l6-11a1 1 0 0 1 1.756.958M7.894 5.553l2 4a1 1 0 0 1 0 .894l-3 6a1 1 0 1 1-1.788-.894L7.882 10L6.106 6.447a1 1 0 1 1 1.788-.894");
}
</style><path class="f69gr9b9v"/>`,
		"fallback": "coolicons:xing-fill-round",
	});
}

export default Component;
