import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5_tpjb1f.css';
import '../../css/m/mry6cbiat.css';
import '../../css/f/f5ytixb_q.css';
import '../../css/c/cjkh2u5cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w5_tpjb1f"/><path clip-rule="evenodd" class="mry6cbiat"/><path class="f5ytixb_q"/><path class="cjkh2u5cy"/></g>`,
		"fallback": "reicon:wineglass2-duotone",
	});
}

export default Component;
