import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_2ei_9u.css';

const viewBox = {"width":336,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz_2ei_9u"/>`,
		"fallback": "ps:zerply",
	});
}

export default Component;
