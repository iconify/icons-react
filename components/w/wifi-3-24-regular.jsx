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
		"content": `<style>.nc59qdxwk {
  fill: currentColor;
  d: path("M10.94 16.44a1.5 1.5 0 1 1 2.12 2.12a1.5 1.5 0 0 1-2.12-2.12m-2.498-2.62a5.09 5.09 0 0 1 7.201 0c.448.447.816.997 1.072 1.582a.75.75 0 1 1-1.373.602a3.7 3.7 0 0 0-.76-1.124a3.59 3.59 0 0 0-5.08 0c-.31.31-.562.689-.746 1.11a.75.75 0 1 1-1.375-.6a5.1 5.1 0 0 1 1.061-1.57");
}
</style><path class="nc59qdxwk"/>`,
		"fallback": "fluent:wifi-3-24-regular",
	});
}

export default Component;
