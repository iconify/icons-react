import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbbvwihfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbbvwihfu"/>`,
		"fallback": "bi:wifi-off",
	});
}

export default Component;
