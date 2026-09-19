import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0s0bu_wi.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0s0bu_wi"/>`,
		"fallback": "fa6-solid:wine-glass-empty",
	});
}

export default Component;
