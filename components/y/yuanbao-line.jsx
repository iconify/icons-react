import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crjh0zb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crjh0zb0j"/>`,
		"fallback": "mingcute:yuanbao-line",
	});
}

export default Component;
