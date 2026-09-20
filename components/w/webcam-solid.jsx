import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzuc2fb_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uzuc2fb_i"/>`,
		"fallback": "streamline-flex:webcam-solid",
	});
}

export default Component;
