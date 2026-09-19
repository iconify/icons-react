import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0e8keb5r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0e8keb5r"/>`,
		"fallback": "fa7-brands:yammer",
	});
}

export default Component;
