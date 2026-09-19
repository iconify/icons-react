import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iohia0n9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iohia0n9o"/>`,
		"fallback": "fa-solid:wheelchair",
	});
}

export default Component;
