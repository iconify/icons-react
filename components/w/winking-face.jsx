import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/t/ti7iuz0ar.css';
import '../../css/f/fdkk_lsdm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="ti7iuz0ar"/><path class="fdkk_lsdm"/></g>`,
		"fallback": "fluent-emoji-flat:winking-face",
	});
}

export default Component;
