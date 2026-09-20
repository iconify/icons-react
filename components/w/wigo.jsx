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
		"content": `<style>.ab64tmb8n {
  fill: var(--svg-color--070bf0, #070bf0);
  d: path("M21 12h-1.928V6.073a15.01 15.01 0 0 1-15.21 4.089L3 9.904l.514-1.729l.868.257c4.822 1.44 10.093.148 13.539-3.503H12V3h9zM3 12h1.929v5.927a15.01 15.01 0 0 1 15.21-4.088l.861.257l-.514 1.729l-.868-.257a13.35 13.35 0 0 0-13.539 3.504H12V21H3z");
}
</style><path class="ab64tmb8n"/>`,
		"fallback": "token-branded:wigo",
	});
}

export default Component;
