import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/az38-2bov.css';
import '../../css/a/azk4kkbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="az38-2bov"/><path class="azk4kkbbo"/></g>`,
		"fallback": "guidance:wi-fi",
	});
}

export default Component;
