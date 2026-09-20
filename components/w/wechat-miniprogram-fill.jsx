import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gle8jacmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gle8jacmg"/>`,
		"fallback": "mingcute:wechat-miniprogram-fill",
	});
}

export default Component;
