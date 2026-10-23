import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6rj7ac-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6rj7ac-j"/>`,
		"fallback": "vadivam:webcam",
	});
}

export default Component;
