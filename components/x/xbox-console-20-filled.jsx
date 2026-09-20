import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j-jvk1b6z {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5H7V9.5a.5.5 0 0 1 1 0V18h7.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5zm3 4.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5");
}
</style><path class="j-jvk1b6z"/>`,
		"fallback": "fluent:xbox-console-20-filled",
	});
}

export default Component;
