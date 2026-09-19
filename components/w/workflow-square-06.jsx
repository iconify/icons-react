import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fzej-ib-h.css';
import '../../css/v/vwxsdrsmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fzej-ib-h"/><path class="vwxsdrsmr"/></g>`,
		"fallback": "hugeicons:workflow-square-06",
	});
}

export default Component;
