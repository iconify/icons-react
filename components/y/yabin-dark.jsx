import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8vl0pbow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8vl0pbow"/>`,
		"fallback": "selfhst:yabin-dark",
	});
}

export default Component;
