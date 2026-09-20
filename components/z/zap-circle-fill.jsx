import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg7t42bnk.css';
import '../../css/u/ustelzbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg7t42bnk"/><path class="ustelzbvh"/>`,
		"fallback": "mage:zap-circle-fill",
	});
}

export default Component;
