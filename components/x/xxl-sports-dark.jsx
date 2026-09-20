import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xld-v2bps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xld-v2bps"/>`,
		"fallback": "selfhst:xxl-sports-dark",
	});
}

export default Component;
