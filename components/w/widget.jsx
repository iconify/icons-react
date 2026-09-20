import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/facxpwp-r.css';
import '../../css/h/hozex6clf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="facxpwp-r"/><path class="hozex6clf"/></g>`,
		"fallback": "tdesign:widget",
	});
}

export default Component;
