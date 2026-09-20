import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdfgju1yx.css';
import '../../css/z/zo7ztcbje.css';
import '../../css/d/dh-88wgzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdfgju1yx"/><path clip-rule="evenodd" class="zo7ztcbje"/><path class="dh-88wgzw"/></g>`,
		"fallback": "streamline-plump-color:yin-yang-symbol-flat",
	});
}

export default Component;
