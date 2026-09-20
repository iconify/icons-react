import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w96-bnb2f.css';
import '../../css/x/xndoh56bm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w96-bnb2f"/><path class="xndoh56bm"/></g>`,
		"fallback": "streamline-color:windows",
	});
}

export default Component;
