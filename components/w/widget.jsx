import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-egyzb8n.css';
import '../../css/m/mv2uybkwg.css';
import '../../css/d/dyg_onssg.css';
import '../../css/m/me0dii31i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-egyzb8n"/><path class="mv2uybkwg"/><path class="dyg_onssg"/><path class="me0dii31i"/></g>`,
		"fallback": "streamline-color:widget",
	});
}

export default Component;
