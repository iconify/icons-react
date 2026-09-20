import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6r87g8pv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6r87g8pv"/>`,
		"fallback": "selfhst:zerobyte-light",
	});
}

export default Component;
