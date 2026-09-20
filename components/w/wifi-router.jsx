import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez3i36qlu.css';
import '../../css/g/gondb_wup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ez3i36qlu"/><path class="gondb_wup"/></g>`,
		"fallback": "streamline-color:wifi-router",
	});
}

export default Component;
