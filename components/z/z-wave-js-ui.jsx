import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn4gi9b9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn4gi9b9l"/>`,
		"fallback": "selfhst:z-wave-js-ui",
	});
}

export default Component;
