import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5q-9mbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5q-9mbky"/>`,
		"fallback": "streamline-ultimate:wechat-pay-logo",
	});
}

export default Component;
