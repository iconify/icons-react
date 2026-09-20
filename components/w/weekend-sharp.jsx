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
		"content": `<style>.kqt12ccgr {
  fill: currentColor;
  d: path("M4.615 15.423V9.231h-.384v-1.5h15.538v1.5h-.384v6.192zm-1.23 2.192V9.308h1.384v2.961h14.462V9.308h1.384v8.307z");
}
</style><path class="kqt12ccgr"/>`,
		"fallback": "material-symbols-light:weekend-sharp",
	});
}

export default Component;
