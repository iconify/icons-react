import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhxvjuf_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhxvjuf_r"/>`,
		"fallback": "simple-icons:wikiversity",
	});
}

export default Component;
