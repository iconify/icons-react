import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7t5-bzd.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7t5-bzd"/>`,
		"fallback": "fontisto:wheelchair",
	});
}

export default Component;
