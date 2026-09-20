import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvhm6pb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvhm6pb5n"/>`,
		"fallback": "thesvg:webrtc",
	});
}

export default Component;
