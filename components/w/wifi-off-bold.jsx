import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgnn-dbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgnn-dbdc"/>`,
		"fallback": "streamline-ultimate:wifi-off-bold",
	});
}

export default Component;
