import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbauqlbqh.css';
import '../../css/g/g89hwc4lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pbauqlbqh"/><path class="g89hwc4lo"/></g>`,
		"fallback": "streamline-sharp-color:wine-flat",
	});
}

export default Component;
