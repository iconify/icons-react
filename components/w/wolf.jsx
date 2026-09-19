import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i84l0qlsy.css';
import '../../css/v/v3-bt_byi.css';
import '../../css/x/x9ttsibja.css';
import '../../css/f/fj27xs3yu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i84l0qlsy"/><path class="v3-bt_byi"/><path class="x9ttsibja"/><path class="fj27xs3yu"/></g>`,
		"fallback": "fluent-emoji-flat:wolf",
	});
}

export default Component;
