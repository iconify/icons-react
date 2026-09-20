import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8njjlb0b.css';
import '../../css/z/z4cmk4rqc.css';
import '../../css/s/s8ousacij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8njjlb0b"/><path class="z4cmk4rqc"/><path class="s8ousacij"/></g>`,
		"fallback": "tabler:wiper-wash",
	});
}

export default Component;
