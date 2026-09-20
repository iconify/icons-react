import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hclia1bkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hclia1bkf"/>`,
		"fallback": "selfhst:yamtrack-light",
	});
}

export default Component;
