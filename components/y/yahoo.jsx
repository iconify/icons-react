import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0w9p_bxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0w9p_bxv"/>`,
		"fallback": "icomoon-free:yahoo",
	});
}

export default Component;
