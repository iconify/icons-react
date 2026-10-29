import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g_mfudb8u.css';
import '../../css/a/av7g1gbmu.css';
import '../../css/n/n8137bc8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g_mfudb8u"/><path class="av7g1gbmu"/><path class="n8137bc8k"/></g>`,
		"fallback": "withicons-bauhaus:wheat",
	});
}

export default Component;
