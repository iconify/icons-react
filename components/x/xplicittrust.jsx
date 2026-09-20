import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvg_0h2iy.css';
import '../../css/b/b8e-k_44m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvg_0h2iy"/><path class="b8e-k_44m"/>`,
		"fallback": "selfhst:xplicittrust",
	});
}

export default Component;
