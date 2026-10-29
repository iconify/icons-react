import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1ig0xbpa.css';
import '../../css/h/hqwworbnp.css';
import '../../css/o/ocp2bcc9q.css';
import '../../css/v/v2uh4zbrq.css';
import '../../css/j/jjp9km4pf.css';
import '../../css/y/y4zjjxbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l1ig0xbpa"/><path class="hqwworbnp wm-k"/><path class="ocp2bcc9q wm-a"/><path class="v2uh4zbrq wm-k"/><path class="jjp9km4pf wm-a"/><path class="wm-s y4zjjxbox"/></g>`,
		"fallback": "withicons:witch-hat-sketch",
	});
}

export default Component;
