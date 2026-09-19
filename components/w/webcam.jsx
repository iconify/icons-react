import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qfpsajb-o.css';
import '../../css/l/l0tvmr4-e.css';
import '../../css/t/tq2sis96r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="qfpsajb-o"/><path class="l0tvmr4-e"/><path class="tq2sis96r"/></g>`,
		"fallback": "icon-park:webcam",
	});
}

export default Component;
