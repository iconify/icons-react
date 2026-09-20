import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5k4lrb5g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5k4lrb5g"/>`,
		"fallback": "lineicons:website-alt",
	});
}

export default Component;
