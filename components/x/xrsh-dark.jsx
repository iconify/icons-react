import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_eir9x1f.css';
import '../../css/x/xah9mvbce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_eir9x1f"/><path class="xah9mvbce"/>`,
		"fallback": "selfhst:xrsh-dark",
	});
}

export default Component;
