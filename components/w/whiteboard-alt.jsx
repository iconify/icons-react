import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deb4nz_eq.css';
import '../../css/f/fea8sczxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b deb4nz_eq"/><path class="b fea8sczxi"/>`,
		"fallback": "boxicons:whiteboard-alt",
	});
}

export default Component;
