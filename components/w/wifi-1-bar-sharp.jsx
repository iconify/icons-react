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
		"content": `<style>.z2dq2wbpl {
  fill: currentColor;
  d: path("m12 21l-2.448-2.454q.486-.486 1.119-.747q.633-.26 1.327-.26t1.329.26t1.121.747z");
}
</style><path class="z2dq2wbpl"/>`,
		"fallback": "material-symbols-light:wifi-1-bar-sharp",
	});
}

export default Component;
