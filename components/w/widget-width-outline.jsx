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
		"content": `<style>.kjlfees1m {
  fill: currentColor;
  d: path("M3 21v-5.077h5.077V21zm6.462 0v-5.077h5.077V21zm6.461 0v-5.077H21V21zM3 14.538V9.462h5.077v5.078zm6.462 0V9.462h5.077v5.078zm6.461 0V9.462H21v5.078zM3 8.077V3h18v5.077zm7.462 8.846h3.077zm-3.385-3.384v-3.077zm9.846 0v-3.077zM4 20h3.077v-3.077H4zm6.462 0h3.077v-3.077h-3.077zm6.461 0H20v-3.077h-3.077zM4 13.538h3.077v-3.076H4zm6.462 0h3.077v-3.076h-3.077zm6.461 0H20v-3.076h-3.077z");
}
</style><path class="kjlfees1m"/>`,
		"fallback": "material-symbols-light:widget-width-outline",
	});
}

export default Component;
