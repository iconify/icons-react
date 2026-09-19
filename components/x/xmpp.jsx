import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyfj8kb6n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyfj8kb6n"/>`,
		"fallback": "fa7-brands:xmpp",
	});
}

export default Component;
