import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xymetfbow.css';
import '../../css/l/lyl3_v-qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xymetfbow"/><path class="lyl3_v-qo"/></g>`,
		"fallback": "keyline-icons:wrench-sharp-two-tone",
	});
}

export default Component;
