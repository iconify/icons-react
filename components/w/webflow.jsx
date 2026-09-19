import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxsp-2zfw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxsp-2zfw"/>`,
		"fallback": "fa7-brands:webflow",
	});
}

export default Component;
