import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxitz_43v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxitz_43v"/>`,
		"fallback": "fa6-brands:wpbeginner",
	});
}

export default Component;
