import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pptts5n7v.css';
import '../../css/c/cqkh9kfgu.css';
import '../../css/l/l5026cbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pptts5n7v"/><path class="cqkh9kfgu"/><path class="l5026cbjl"/></g>`,
		"fallback": "solar:wireless-charge-bold-duotone",
	});
}

export default Component;
