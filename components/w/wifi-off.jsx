import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6pj_b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd6pj_b9o"/>`,
		"fallback": "iconoir:wifi-off",
	});
}

export default Component;
