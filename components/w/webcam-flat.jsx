import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pefwedi9v.css';
import '../../css/l/l3thhdbjs.css';
import '../../css/a/az4c6d8hy.css';
import '../../css/w/wg8nz-biq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pefwedi9v"/><path class="l3thhdbjs"/><path clip-rule="evenodd" class="az4c6d8hy"/><path clip-rule="evenodd" class="wg8nz-biq"/></g>`,
		"fallback": "streamline-color:webcam-flat",
	});
}

export default Component;
