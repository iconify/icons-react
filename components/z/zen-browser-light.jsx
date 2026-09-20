import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9cx2yb5f.css';
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
		"content": `<g clip-rule="evenodd" class="t9cx2yb5f"><path class="y-5x8pjfu"/><path class="fm6tes6gl"/><path class="bqublpl9a"/></g>`,
		"fallback": "thesvg-color:zen-browser-light",
	});
}

export default Component;
