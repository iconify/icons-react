import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkx9g0b0t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkx9g0b0t"/>`,
		"fallback": "lsicon:zoom-out-outline",
	});
}

export default Component;
