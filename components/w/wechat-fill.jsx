import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m02ah1nbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m02ah1nbs"/>`,
		"fallback": "mingcute:wechat-fill",
	});
}

export default Component;
