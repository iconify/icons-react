import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onkvqv5wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onkvqv5wu"/>`,
		"fallback": "mingcute:wechat-pay-line",
	});
}

export default Component;
