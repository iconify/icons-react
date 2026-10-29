import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a_c1rcbiz.css';
import '../../css/v/veervxb0f.css';
import '../../css/c/cp26zrbra.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';
import '../../css/u/ulnr9lfjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a_c1rcbiz wm-k"/><path class="veervxb0f wm-s"/><path class="cp26zrbra wm-shadow"/><path class="wm-k x_b7gqbqv"/><path class="fye1ff7ya wm-a"/><path class="ulnr9lfjv wm-s"/></g>`,
		"fallback": "withicons:worried-engrave",
	});
}

export default Component;
