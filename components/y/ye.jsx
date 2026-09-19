import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq9270lis.css';
import '../../css/s/s2k_flldr.css';
import '../../css/y/ynt2pcbub.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq9270lis"/><path class="s2k_flldr"/><path class="ynt2pcbub"/></g>`,
		"fallback": "cif:ye",
	});
}

export default Component;
