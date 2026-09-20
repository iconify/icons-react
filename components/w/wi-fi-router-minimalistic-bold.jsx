import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm3rfvbpj.css';
import '../../css/s/sy9wrqfva.css';
import '../../css/t/t8ijbdcqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vm3rfvbpj"/><path clip-rule="evenodd" class="sy9wrqfva"/><path class="t8ijbdcqc"/></g>`,
		"fallback": "solar:wi-fi-router-minimalistic-bold",
	});
}

export default Component;
