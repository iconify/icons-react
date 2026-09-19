import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uiyujt59u.css';
import '../../css/m/md286fbip.css';
import '../../css/y/ylooah_cw.css';
import '../../css/r/r593vmbug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uiyujt59u"/><g class="md286fbip"><path class="ylooah_cw"/><path class="r593vmbug"/></g></g>`,
		"fallback": "cryptocurrency-color:wicc",
	});
}

export default Component;
