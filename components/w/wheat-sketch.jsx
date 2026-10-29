import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z6ruasb5p.css';
import '../../css/b/b-gg86l-v.css';
import '../../css/n/n1d3l-bkk.css';
import '../../css/t/t93sacb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z6ruasb5p"/><path class="b-gg86l-v wm-a"/><path class="n1d3l-bkk wm-k"/><path class="t93sacb0x wm-a"/></g>`,
		"fallback": "withicons:wheat-sketch",
	});
}

export default Component;
