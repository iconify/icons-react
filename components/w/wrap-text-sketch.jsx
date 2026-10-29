import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a1bidkywl.css';
import '../../css/v/vx-034bzq.css';
import '../../css/l/lpju1obmb.css';
import '../../css/x/xfyogqb8v.css';
import '../../css/p/ptl8sbnfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a1bidkywl wm-k"/><path class="vx-034bzq wm-k"/><path class="lpju1obmb wm-a"/><path class="wm-a xfyogqb8v"/><path class="ptl8sbnfp wm-a"/></g>`,
		"fallback": "withicons:wrap-text-sketch",
	});
}

export default Component;
