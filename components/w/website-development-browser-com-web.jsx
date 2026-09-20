import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vw_gxpbld.css';
import '../../css/t/t0ujf-b5o.css';
import '../../css/u/u_ntt4bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vw_gxpbld"/><path class="t0ujf-b5o"/><path class="u_ntt4bqx"/></g>`,
		"fallback": "streamline-freehand-color:website-development-browser-com-web",
	});
}

export default Component;
