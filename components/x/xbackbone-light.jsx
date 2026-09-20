import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi9plccts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi9plccts"/>`,
		"fallback": "selfhst:xbackbone-light",
	});
}

export default Component;
