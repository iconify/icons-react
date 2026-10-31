import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/etx2dtb8y.css';
import '../../css/a/aj--sacig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="etx2dtb8y"/><path class="aj--sacig"/></g>`,
		"fallback": "withicons-retro:wrap-text",
	});
}

export default Component;
