import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw-tn0_ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw-tn0_ls"/>`,
		"fallback": "ri:wechat-2-line",
	});
}

export default Component;
