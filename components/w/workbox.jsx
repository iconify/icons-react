import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfh612bxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfh612bxb"/>`,
		"fallback": "file-icons:workbox",
	});
}

export default Component;
