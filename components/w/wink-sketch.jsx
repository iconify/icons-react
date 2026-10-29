import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/izpiltzao.css';
import '../../css/b/bhx_bhpfu.css';
import '../../css/g/g-v_k7b2s.css';
import '../../css/s/s8pgmizvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="izpiltzao"/><path class="bhx_bhpfu wm-a"/><path class="g-v_k7b2s wm-k"/><path class="s8pgmizvv wm-a"/></g>`,
		"fallback": "withicons:wink-sketch",
	});
}

export default Component;
