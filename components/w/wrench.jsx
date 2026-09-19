import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyxh5zbqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyxh5zbqw"/>`,
		"fallback": "fa6-solid:wrench",
	});
}

export default Component;
