import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irr8q213e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irr8q213e"/>`,
		"fallback": "selfhst:zscaler-light",
	});
}

export default Component;
