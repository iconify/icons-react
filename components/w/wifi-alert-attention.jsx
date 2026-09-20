import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fan5bvbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fan5bvbvk"/>`,
		"fallback": "streamline-ultimate:wifi-alert-attention",
	});
}

export default Component;
