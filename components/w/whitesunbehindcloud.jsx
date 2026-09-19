import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlakeub9c.css';
import '../../css/c/c_uyv2bcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mlakeub9c"/><path class="c_uyv2bcx"/>`,
		"fallback": "fxemoji:whitesunbehindcloud",
	});
}

export default Component;
