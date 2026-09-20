import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy1nasb1l.css';
import '../../css/f/fpys2ac3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy1nasb1l"/><path class="fpys2ac3n"/>`,
		"fallback": "lineicons:xampp",
	});
}

export default Component;
