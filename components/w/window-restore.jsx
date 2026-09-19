import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9khp6ncv.css';
import '../../css/m/m6xypubal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9khp6ncv"/><path class="m6xypubal"/>`,
		"fallback": "cil:window-restore",
	});
}

export default Component;
