import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7b6kccap.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7b6kccap"/>`,
		"fallback": "bi:wifi-1",
	});
}

export default Component;
