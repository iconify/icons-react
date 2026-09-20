import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8yf87b9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8yf87b9u"/>`,
		"fallback": "selfhst:wells-fargo-light",
	});
}

export default Component;
