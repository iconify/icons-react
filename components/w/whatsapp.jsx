import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_8a0ebkt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_8a0ebkt"/>`,
		"fallback": "bi:whatsapp",
	});
}

export default Component;
