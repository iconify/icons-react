import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsz_7fcig.css';
import '../../css/h/hwgoyq6ej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fsz_7fcig"/><path clip-rule="evenodd" class="hwgoyq6ej"/></g>`,
		"fallback": "streamline-plump-color:wheelchair-2-flat",
	});
}

export default Component;
