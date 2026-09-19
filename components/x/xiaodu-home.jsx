import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w0wqrbbmr.css';
import '../../css/j/jqhgracnq.css';
import '../../css/n/n64tapbno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="w0wqrbbmr"/><path class="jqhgracnq"/><path class="n64tapbno"/></g>`,
		"fallback": "icon-park:xiaodu-home",
	});
}

export default Component;
