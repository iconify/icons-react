import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezmmy98le.css';
import '../../css/q/qvl8-lbed.css';
import '../../css/x/xtpeb-edw.css';
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
		"content": `<path clip-rule="evenodd" class="ezmmy98le"/><path class="qvl8-lbed"/><g class="xtpeb-edw"><path class="lzfr0mu0h"/><path class="t_c730b3w"/></g>`,
		"fallback": "solar:webcam-off-bold-duotone",
	});
}

export default Component;
