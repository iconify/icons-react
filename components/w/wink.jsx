import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/egwfombsu.css';
import '../../css/h/hbl9yebar.css';
import '../../css/d/duo2k8-5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="egwfombsu"/><path class="hbl9yebar"/><path class="duo2k8-5d"/></g>`,
		"fallback": "withicons-bauhaus:wink",
	});
}

export default Component;
