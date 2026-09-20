import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhqb61bvf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhqb61bvf"/>`,
		"fallback": "lsicon:word-cloud-outline",
	});
}

export default Component;
