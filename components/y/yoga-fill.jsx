import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi114soup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi114soup"/>`,
		"fallback": "mingcute:yoga-fill",
	});
}

export default Component;
