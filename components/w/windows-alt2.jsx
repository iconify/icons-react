import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycfcbpy_o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycfcbpy_o"/>`,
		"fallback": "dinkie-icons:windows-alt2",
	});
}

export default Component;
