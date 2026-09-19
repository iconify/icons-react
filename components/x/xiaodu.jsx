import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zrhez3rwb.css';
import '../../css/s/s65zp6b0h.css';
import '../../css/c/c8wpltb0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="zrhez3rwb"/><path class="s65zp6b0h"/><path class="c8wpltb0s"/></g>`,
		"fallback": "icon-park:xiaodu",
	});
}

export default Component;
