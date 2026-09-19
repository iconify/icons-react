import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw7s5sw9o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw7s5sw9o"/>`,
		"fallback": "garden:x-stroke-12",
	});
}

export default Component;
