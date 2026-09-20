import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/o/ob96a9x6o.css';
import '../../css/i/iv0n5py_z.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ob96a9x6o"/><path class="iv0n5py_z"/></g>`,
		"fallback": "system-uicons:wrap-forward",
	});
}

export default Component;
