import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/anvf75_au.css';
import '../../css/i/i7i_l_bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="anvf75_au"/><path class="i7i_l_bxv"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-phone",
	});
}

export default Component;
