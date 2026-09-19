import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fggvvekwy.css';
import '../../css/r/r7ekljbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="fggvvekwy"/><path class="r7ekljbrk"/></g>`,
		"fallback": "grommet-icons:wifi-none",
	});
}

export default Component;
