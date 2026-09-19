import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3-5554gl.css';
import '../../css/l/lmgxn5bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3-5554gl"/><path class="lmgxn5bcb"/>`,
		"fallback": "boxicons:x-circle",
	});
}

export default Component;
