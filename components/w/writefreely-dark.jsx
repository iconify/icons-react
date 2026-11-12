import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2txbcl2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2txbcl2h"/>`,
		"fallback": "selfhst:writefreely-dark",
	});
}

export default Component;
