import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxn6wcoog.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxn6wcoog"/>`,
		"fallback": "fa6-brands:wix",
	});
}

export default Component;
