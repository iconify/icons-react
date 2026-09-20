import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cu1491zmm.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/k/kbmdv19sg.css';
import '../../css/u/uwes2uvpu.css';
import '../../css/p/pbkeun42d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cu1491zmm"/><path class="rsrhfac5n"/><path class="v_cyp7bey"/><path class="kbmdv19sg"/><path class="uwes2uvpu"/><path class="pbkeun42d"/></g>`,
		"fallback": "solar:webcam-off-line-duotone",
	});
}

export default Component;
