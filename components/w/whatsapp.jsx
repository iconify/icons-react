import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tuajgux-t.css';
import '../../css/b/bu7sd4c2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tuajgux-t"/><path class="bu7sd4c2y"/></g>`,
		"fallback": "iconoir:whatsapp",
	});
}

export default Component;
