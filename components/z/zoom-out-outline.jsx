import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys_em6wiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys_em6wiq"/>`,
		"fallback": "typcn:zoom-out-outline",
	});
}

export default Component;
