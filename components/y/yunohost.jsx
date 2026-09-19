import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrnwts-5v.css';
import '../../css/t/t0dn9ubiv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-173.29 -80.936)scale(3.77953)"><rect class="yrnwts-5v"/><path class="t0dn9ubiv"/></g>`,
		"fallback": "devicon:yunohost",
	});
}

export default Component;
