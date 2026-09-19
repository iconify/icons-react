import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isx31j0kf.css';

const viewBox = {"width":87,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isx31j0kf"/>`,
		"fallback": "garden:wordmark-sunshine-26",
	});
}

export default Component;
