import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igtflkirm.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igtflkirm"/>`,
		"fallback": "fa6-brands:webflow",
	});
}

export default Component;
