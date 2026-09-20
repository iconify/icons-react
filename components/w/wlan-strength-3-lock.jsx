import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay9_sac9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ay9_sac9z"/>`,
		"fallback": "ix:wlan-strength-3-lock",
	});
}

export default Component;
