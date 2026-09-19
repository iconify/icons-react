import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-7_1byu.css';
import '../../css/p/pkbytrbkz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb-7_1byu"/><path class="pkbytrbkz"/></g>`,
		"fallback": "fluent-emoji-flat:womans-boot",
	});
}

export default Component;
