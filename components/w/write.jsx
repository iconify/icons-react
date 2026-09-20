import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx-k1mb0o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx-k1mb0o"/>`,
		"fallback": "lineicons:write",
	});
}

export default Component;
