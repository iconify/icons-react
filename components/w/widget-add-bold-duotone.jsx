import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/c/cvjox4b6h.css';
import '../../css/t/t-byfzbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yruzez1gq"/><path class="eog0g2beg"/><path class="cvjox4b6h"/><path class="t-byfzbic"/></g>`,
		"fallback": "solar:widget-add-bold-duotone",
	});
}

export default Component;
