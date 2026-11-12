import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im1he9aee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im1he9aee"/>`,
		"fallback": "selfhst:wger-dark",
	});
}

export default Component;
