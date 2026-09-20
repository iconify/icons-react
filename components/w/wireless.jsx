import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwr_azbnc.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/j/jhtplst3i.css';
import '../../css/t/tsuhnpbzy.css';
import '../../css/w/wdh_whbyu.css';
import '../../css/i/i04lqib5p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwr_azbnc"/><g class="hzhb0bcwn"><rect class="jhtplst3i"/><circle class="tsuhnpbzy"/><path class="wdh_whbyu"/><path class="i04lqib5p"/></g>`,
		"fallback": "openmoji:wireless",
	});
}

export default Component;
