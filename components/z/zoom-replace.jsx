import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j33yqjb_r.css';
import '../../css/j/j4w39z04o.css';
import '../../css/u/uby7wgr4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j33yqjb_r"/><path class="j4w39z04o"/><path class="uby7wgr4w"/></g>`,
		"fallback": "tabler:zoom-replace",
	});
}

export default Component;
