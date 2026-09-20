import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkt59acob.css';
import '../../css/g/gdswwybji.css';
import '../../css/c/cypg0eb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bkt59acob"/><path class="gdswwybji"/><path class="cypg0eb-o"/></g>`,
		"fallback": "reicon:wireless-charge-duotone",
	});
}

export default Component;
