import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxpg3nbkx.css';
import '../../css/d/d0vi13cyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxpg3nbkx secondary"/><path class="d0vi13cyo primary"/>`,
		"fallback": "iconaut:zap-duo",
	});
}

export default Component;
