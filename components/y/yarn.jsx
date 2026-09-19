import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bry7-8gsd.css';
import '../../css/o/ocs25vtjs.css';
import '../../css/y/y1h7v0eew.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bry7-8gsd"/><path class="ocs25vtjs"/><path class="y1h7v0eew"/></g>`,
		"fallback": "fluent-emoji-flat:yarn",
	});
}

export default Component;
