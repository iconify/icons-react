import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pccm1gbjw.css';

const viewBox = {"width":504,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pccm1gbjw"/>`,
		"fallback": "zmdi:wifi-alt-2",
	});
}

export default Component;
