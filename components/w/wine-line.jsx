import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqor534jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqor534jy"/>`,
		"fallback": "mingcute:wine-line",
	});
}

export default Component;
