import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlma8nb5g.css';

const viewBox = {"width":1080,"height":674};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rlma8nb5g"/>`,
		"fallback": "thesvg-color:webflow",
	});
}

export default Component;
