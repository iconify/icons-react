import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxlz_6eqg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxlz_6eqg"/>`,
		"fallback": "garden:whatsapp-fill-12",
	});
}

export default Component;
