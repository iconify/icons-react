import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x33363h0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x33363h0e"/>`,
		"fallback": "streamline-ultimate:zoom-in-page",
	});
}

export default Component;
