import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhp_tvhii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhp_tvhii"/>`,
		"fallback": "ri:wechat-channels-fill",
	});
}

export default Component;
