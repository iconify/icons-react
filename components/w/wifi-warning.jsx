import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c_tfljbio.css';
import '../../css/t/tys149sxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c_tfljbio"/><path class="tys149sxr"/></g>`,
		"fallback": "iconoir:wifi-warning",
	});
}

export default Component;
