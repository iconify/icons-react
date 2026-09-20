import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1hf5acsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1hf5acsv"/>`,
		"fallback": "streamline-color:wifi-horizontal",
	});
}

export default Component;
