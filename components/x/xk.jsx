import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aui1ykh8i.css';
import '../../css/q/qz_pprnfi.css';
import '../../css/b/bgvh92byt.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aui1ykh8i"/><path class="qz_pprnfi"/><path class="bgvh92byt"/></g>`,
		"fallback": "cif:xk",
	});
}

export default Component;
