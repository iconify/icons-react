import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hod_yhbac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hod_yhbac"/>`,
		"fallback": "selfhst:webssh-light",
	});
}

export default Component;
