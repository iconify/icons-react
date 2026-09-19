import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtt81nbxc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtt81nbxc"/>`,
		"fallback": "fa6-brands:wizards-of-the-coast",
	});
}

export default Component;
