import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv_1hsb5h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv_1hsb5h"/>`,
		"fallback": "whh:wrenchalt",
	});
}

export default Component;
