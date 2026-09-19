import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka84vzb2a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka84vzb2a"/>`,
		"fallback": "fa-brands:whatsapp",
	});
}

export default Component;
