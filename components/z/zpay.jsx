import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn9xzubml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn9xzubml"/>`,
		"fallback": "token:zpay",
	});
}

export default Component;
