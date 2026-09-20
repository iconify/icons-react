import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kqfwqdb1e.css';
import '../../css/z/zpi6f-bpl.css';
import '../../css/q/qogcv6q-p.css';
import '../../css/f/fnyewcbio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kqfwqdb1e"/><path class="zpi6f-bpl"/><path class="qogcv6q-p"/><path class="fnyewcbio"/></g>`,
		"fallback": "streamline-plump-color:zoom-in",
	});
}

export default Component;
