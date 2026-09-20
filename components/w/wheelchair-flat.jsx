import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skki4c5ls.css';
import '../../css/n/nrv_yob9g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="skki4c5ls"/><path class="nrv_yob9g"/></g>`,
		"fallback": "streamline-flex-color:wheelchair-flat",
	});
}

export default Component;
