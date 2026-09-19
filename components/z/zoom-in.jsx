import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugh8mab3o.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugh8mab3o"/>`,
		"fallback": "el:zoom-in",
	});
}

export default Component;
