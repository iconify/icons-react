import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/m/mh6j-jb0n.css';
import '../../css/z/zvzu5zjds.css';
import '../../css/g/g-cvnihgk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><circle class="mh6j-jb0n"/><path clip-rule="evenodd" class="zvzu5zjds"/><path clip-rule="evenodd" class="g-cvnihgk"/></g>`,
		"fallback": "fluent-emoji-flat:yawning-face",
	});
}

export default Component;
