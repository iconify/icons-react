import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lmiso_bzd.css';
import '../../css/x/xolfzwbae.css';
import '../../css/a/a9objzbor.css';
import '../../css/q/qnns3cbcc.css';
import '../../css/n/nq91dpkwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lmiso_bzd wm-k"/><path class="wm-a xolfzwbae"/><path class="a9objzbor wm-shadow"/><path class="qnns3cbcc wm-k"/><path class="nq91dpkwm wm-a"/></g>`,
		"fallback": "withicons:wrap-text-engrave",
	});
}

export default Component;
