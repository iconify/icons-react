import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm9_3bbqh.css';
import '../../css/y/y-5x8pjfu.css';
import '../../css/f/fm6tes6gl.css';
import '../../css/b/bqublpl9a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="nm9_3bbqh"><path class="y-5x8pjfu"/><path class="fm6tes6gl"/><path class="bqublpl9a"/></g>`,
		"fallback": "thesvg-color:zen-browser-dark",
	});
}

export default Component;
