import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrqj4ib2v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrqj4ib2v"/>`,
		"fallback": "whh:zencart",
	});
}

export default Component;
