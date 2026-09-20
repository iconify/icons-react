import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n37ya1f6y.css';
import '../../css/w/wlewzvvuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n37ya1f6y"/><path class="wlewzvvuc"/></g>`,
		"fallback": "tdesign:work",
	});
}

export default Component;
