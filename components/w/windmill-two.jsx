import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/p/pdttvhrxv.css';
import '../../css/f/fprqcac9y.css';
import '../../css/d/din99669s.css';
import '../../css/x/x1iu_qbxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="pdttvhrxv"/><path class="fprqcac9y"/><path class="din99669s"/><path class="x1iu_qbxr"/></g>`,
		"fallback": "icon-park:windmill-two",
	});
}

export default Component;
