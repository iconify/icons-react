import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ftvehwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ftvehwh"/>`,
		"fallback": "coolicons:window-minus-corner-fill-round",
	});
}

export default Component;
