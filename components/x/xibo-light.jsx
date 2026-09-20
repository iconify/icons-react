import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/his-o6bcm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="his-o6bcm"/>`,
		"fallback": "selfhst:xibo-light",
	});
}

export default Component;
