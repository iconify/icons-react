import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuch1achf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuch1achf"/>`,
		"fallback": "grommet-icons:zoom-in",
	});
}

export default Component;
