import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btg86dbrj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btg86dbrj"/>`,
		"fallback": "cib:xero",
	});
}

export default Component;
