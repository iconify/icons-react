import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_t8mxb_n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_t8mxb_n"/>`,
		"fallback": "f7:wifi-slash",
	});
}

export default Component;
