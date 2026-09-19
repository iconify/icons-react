import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk1lweb0u.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk1lweb0u"/>`,
		"fallback": "el:wheelchair",
	});
}

export default Component;
