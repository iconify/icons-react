import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o799grbnj.css';
import '../../css/u/u8zrg7bhy.css';
import '../../css/e/er-w92bug.css';
import '../../css/r/rn1y9lnpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o799grbnj"><path class="u8zrg7bhy"/><path class="er-w92bug"/><path class="rn1y9lnpv"/></g>`,
		"fallback": "streamline-cyber:window-bookmark",
	});
}

export default Component;
