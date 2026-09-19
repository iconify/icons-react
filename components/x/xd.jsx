import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y19ixtbyb.css';
import '../../css/r/r_go1j2mv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y19ixtbyb"/><path class="r_go1j2mv"/>`,
		"fallback": "devicon:xd",
	});
}

export default Component;
