import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc-u6vh6m.css';
import '../../css/v/vxkg_gsow.css';
import '../../css/f/fix4lj0fj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vc-u6vh6m"/><path class="vxkg_gsow"/><path class="fix4lj0fj"/></g>`,
		"fallback": "streamline-flex-color:wifi-secure-connection",
	});
}

export default Component;
