import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wptum8b_n.css';
import '../../css/x/x7spcd5gw.css';
import '../../css/r/r_u2rg8xx.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wptum8b_n"/><path class="x7spcd5gw"/><path class="r_u2rg8xx"/>`,
		"fallback": "lineicons:website",
	});
}

export default Component;
