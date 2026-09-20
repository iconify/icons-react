import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwv2rb7dk.css';
import '../../css/e/ejz03ub5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwv2rb7dk"/><path class="ejz03ub5z"/>`,
		"fallback": "selfhst:webhook-tester-dark",
	});
}

export default Component;
