import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc311kbzt.css';
import '../../css/t/tfsq0xb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc311kbzt"/><path class="tfsq0xb1f"/>`,
		"fallback": "solar:wi-fi-low-bold-duotone",
	});
}

export default Component;
