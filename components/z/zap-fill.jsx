import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiy75sbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiy75sbjs"/>`,
		"fallback": "mage:zap-fill",
	});
}

export default Component;
