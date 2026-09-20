import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpy_g2b9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpy_g2b9f"/>`,
		"fallback": "selfhst:x-p-ferd-light",
	});
}

export default Component;
