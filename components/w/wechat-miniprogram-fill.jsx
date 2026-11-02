import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzsz40bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzsz40bjy"/>`,
		"fallback": "mingcute:wechat-miniprogram-fill",
	});
}

export default Component;
