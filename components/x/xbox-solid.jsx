import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrbsh4b3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yrbsh4b3v"/>`,
		"fallback": "streamline:xbox-solid",
	});
}

export default Component;
