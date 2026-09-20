import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvpvgn1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvpvgn1y"/>`,
		"fallback": "tabler:zoom-exclamation",
	});
}

export default Component;
