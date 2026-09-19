import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow-jzvb4m.css';
import '../../css/e/ehap8ibnk.css';
import '../../css/w/wpsd9e-pi.css';
import '../../css/c/cfwp83blx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow-jzvb4m"/><path class="ehap8ibnk"/><path class="wpsd9e-pi"/><path class="cfwp83blx"/></g>`,
		"fallback": "fluent-emoji-flat:wind-face",
	});
}

export default Component;
