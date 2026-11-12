import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfj6s_bbb.css';
import '../../css/w/wsi6v13mq.css';
import '../../css/h/h_1tt7l9g.css';
import '../../css/p/pfrpmpb1c.css';
import '../../css/n/nul8knx4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfj6s_bbb"/><path class="wsi6v13mq"/><path class="h_1tt7l9g"/><path class="pfrpmpb1c"/><path class="nul8knx4i"/>`,
		"fallback": "selfhst:wiki-js-dark",
	});
}

export default Component;
