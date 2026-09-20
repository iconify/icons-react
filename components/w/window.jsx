import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4d_gbb9s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4d_gbb9s"/>`,
		"fallback": "temaki:window",
	});
}

export default Component;
