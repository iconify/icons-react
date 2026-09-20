import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l974u_srj.css';
import '../../css/h/hh0j4fnrz.css';
import '../../css/e/eddw_qbni.css';
import '../../css/n/n_f6npbzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l974u_srj"/><path class="hh0j4fnrz"/><path class="eddw_qbni"/><path class="n_f6npbzw"/>`,
		"fallback": "selfhst:zigbee2mqtt",
	});
}

export default Component;
