import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfz1t-ffx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfz1t-ffx"/>`,
		"fallback": "fluent-mdl2:wifi-ethernet",
	});
}

export default Component;
