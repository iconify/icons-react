import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-n64rb1o.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-n64rb1o"/>`,
		"fallback": "fa-brands:xing",
	});
}

export default Component;
