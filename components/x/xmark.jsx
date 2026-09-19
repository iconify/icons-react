import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3cw-hawx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3cw-hawx"/>`,
		"fallback": "iconoir:xmark",
	});
}

export default Component;
