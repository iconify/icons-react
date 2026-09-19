import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsat9nb5g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsat9nb5g"/>`,
		"fallback": "whh:wrench",
	});
}

export default Component;
