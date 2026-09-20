import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7gk634bm.css';
import '../../css/t/t95fy_bam.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7gk634bm"/><path class="t95fy_bam"/>`,
		"fallback": "teenyicons:wifi-full-solid",
	});
}

export default Component;
