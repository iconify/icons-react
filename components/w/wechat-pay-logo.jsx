import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f43icszpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f43icszpn"/>`,
		"fallback": "streamline-logos:wechat-pay-logo",
	});
}

export default Component;
