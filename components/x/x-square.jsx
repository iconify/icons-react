import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jor-usn7v.css';
import '../../css/y/y3-5554gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jor-usn7v"/><path class="y3-5554gl"/>`,
		"fallback": "boxicons:x-square",
	});
}

export default Component;
