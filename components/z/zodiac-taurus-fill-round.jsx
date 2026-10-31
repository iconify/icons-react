import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwr2qro4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwr2qro4d"/>`,
		"fallback": "coolicons:zodiac-taurus-fill-round",
	});
}

export default Component;
