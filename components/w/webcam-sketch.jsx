import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qpz6oqbnu.css';
import '../../css/v/vx6xstn_h.css';
import '../../css/y/y9eu_1cph.css';
import '../../css/w/w6lciq-cv.css';
import '../../css/d/d7z456tri.css';
import '../../css/i/i-qe3bl2z.css';
import '../../css/w/wmmlxhqwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qpz6oqbnu wm-k"/><path class="vx6xstn_h wm-k"/><path class="wm-a y9eu_1cph"/><path class="w6lciq-cv wm-a"/><path class="d7z456tri wm-k"/><path class="i-qe3bl2z wm-k"/><path class="wm-k wmmlxhqwa"/></g>`,
		"fallback": "withicons:webcam-sketch",
	});
}

export default Component;
