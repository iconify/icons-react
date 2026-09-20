import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brecvkz6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brecvkz6b"/>`,
		"fallback": "streamline-ultimate:wechat-pay-logo-bold",
	});
}

export default Component;
