import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjehtdb3z.css';
import '../../css/y/ys0-a9buz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjehtdb3z"/><path class="ys0-a9buz"/>`,
		"fallback": "ix:wechat-logo",
	});
}

export default Component;
