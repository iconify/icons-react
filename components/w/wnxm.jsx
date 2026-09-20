import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyepu6w6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyepu6w6r"/>`,
		"fallback": "token:wnxm",
	});
}

export default Component;
