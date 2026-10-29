import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rmq984bjk.css';
import '../../css/y/y051bxb0l.css';
import '../../css/f/fjzjs9b3x.css';
import '../../css/p/psa_3hb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rmq984bjk"/><path class="wm-k y051bxb0l"/><path class="fjzjs9b3x wm-k"/><path class="psa_3hb6w wm-a"/></g>`,
		"fallback": "withicons:workflow-sketch",
	});
}

export default Component;
