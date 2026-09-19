import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvp08zbpt.css';
import '../../css/x/xv24-fbig.css';
import '../../css/m/m-cmt_3ct.css';
import '../../css/g/gxz8fabbb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvp08zbpt"/><path class="xv24-fbig"/><path class="m-cmt_3ct"/><path class="gxz8fabbb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-white-hair",
	});
}

export default Component;
