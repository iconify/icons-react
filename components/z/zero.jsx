import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxxbmibop.css';

const viewBox = {"width":184,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxxbmibop"/>`,
		"fallback": "zmdi:zero",
	});
}

export default Component;
