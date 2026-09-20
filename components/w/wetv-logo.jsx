import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fgk4y8bzi.css';
import '../../css/w/wx459cbmv.css';
import '../../css/p/pfzwxhvsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fgk4y8bzi"/><path class="wx459cbmv"/><path class="pfzwxhvsd"/></g>`,
		"fallback": "streamline-logos:wetv-logo",
	});
}

export default Component;
