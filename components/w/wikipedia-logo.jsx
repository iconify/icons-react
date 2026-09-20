import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/d/die78ntcw.css';
import '../../css/d/d19l9rbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="die78ntcw"/><path class="d19l9rbzt"/></g>`,
		"fallback": "streamline-ultimate-color:wikipedia-logo",
	});
}

export default Component;
