import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-n0pf_-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-n0pf_-e"/>`,
		"fallback": "tdesign:zoom-in-filled",
	});
}

export default Component;
