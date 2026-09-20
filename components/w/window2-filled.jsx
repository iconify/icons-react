import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8r2gdb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8r2gdb-k"/>`,
		"fallback": "reicon:window2-filled",
	});
}

export default Component;
