import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umxgh6bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umxgh6bfd"/>`,
		"fallback": "thesvg:xero",
	});
}

export default Component;
