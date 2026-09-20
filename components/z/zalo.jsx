import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po_jy88nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po_jy88nd"/>`,
		"fallback": "thesvg-color:zalo",
	});
}

export default Component;
