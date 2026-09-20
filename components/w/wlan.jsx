import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxghsl_ou.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxghsl_ou"/>`,
		"fallback": "roentgen:wlan",
	});
}

export default Component;
