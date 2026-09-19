import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6i3yx5qo.css';

const viewBox = {"width":800,"height":702};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6i3yx5qo"/>`,
		"fallback": "ls:yapcasia",
	});
}

export default Component;
