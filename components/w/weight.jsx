import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjlcows1u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjlcows1u"/>`,
		"fallback": "whh:weight",
	});
}

export default Component;
