import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3rpqtqvu.css';

const viewBox = {"width":1537,"height":1537};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3rpqtqvu"/>`,
		"fallback": "wi:wind-direction",
	});
}

export default Component;
