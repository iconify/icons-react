import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x25z2o0be.css';
import '../../css/o/o11niq9fb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lzfr0mu0h.css';
import '../../css/t/t_c730b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x25z2o0be"/><path class="o11niq9fb"/><g class="mc2zb0bvp"><path class="lzfr0mu0h"/><path class="t_c730b3w"/></g></g>`,
		"fallback": "solar:webcam-off-bold-duotone",
	});
}

export default Component;
