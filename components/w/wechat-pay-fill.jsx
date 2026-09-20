import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjc4pcc3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjc4pcc3n"/>`,
		"fallback": "mingcute:wechat-pay-fill",
	});
}

export default Component;
