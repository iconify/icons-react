import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfzz9-bve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfzz9-bve"/>`,
		"fallback": "icomoon-free:wordpress",
	});
}

export default Component;
