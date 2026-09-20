import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckc_8ib1x.css';
import '../../css/b/bctvapb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckc_8ib1x"/><path clip-rule="evenodd" class="bctvapb7b"/></g>`,
		"fallback": "streamline-sharp-color:zip-file-flat",
	});
}

export default Component;
