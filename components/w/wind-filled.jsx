import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh-h126fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh-h126fd"/>`,
		"fallback": "reicon:wind-filled",
	});
}

export default Component;
