import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoecd5b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoecd5b1x"/>`,
		"fallback": "token:zap",
	});
}

export default Component;
