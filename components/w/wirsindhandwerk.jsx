import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck1m0fbxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck1m0fbxp"/>`,
		"fallback": "fa6-brands:wirsindhandwerk",
	});
}

export default Component;
