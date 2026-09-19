import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/waov-pqex.css';
import '../../css/x/xgt5zsbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="waov-pqex"/><path class="xgt5zsbin"/></g>`,
		"fallback": "hugeicons:whatsapp-business",
	});
}

export default Component;
