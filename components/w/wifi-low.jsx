import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkkbbgben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkkbbgben"/>`,
		"fallback": "noviair-light:wifi-low",
	});
}

export default Component;
