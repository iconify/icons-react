import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiec4kn4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiec4kn4a"/>`,
		"fallback": "dashicons:whatsapp",
	});
}

export default Component;
