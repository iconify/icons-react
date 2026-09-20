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
		"content": `<style>.cgg0zjv3m {
  fill: currentColor;
  d: path("M2 19V8.923h2V4.962h16v3.961h2V19zm4-4.962h12V8.923h1V5.962H5v2.961h1zM3 18h18V9.923h-2v5.116H5V9.923H3zm9-2.961");
}
</style><path class="cgg0zjv3m"/>`,
		"fallback": "material-symbols-light:weekend-outline-sharp",
	});
}

export default Component;
