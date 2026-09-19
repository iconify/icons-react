import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpd3-cc6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpd3-cc6j"/>`,
		"fallback": "iconoir:wrench",
	});
}

export default Component;
