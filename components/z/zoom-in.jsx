import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thr4qybcy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thr4qybcy"/>`,
		"fallback": "icomoon-free:zoom-in",
	});
}

export default Component;
