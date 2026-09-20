import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2ta-sa5e.css';
import '../../css/n/np1q-ibul.css';
import '../../css/t/tgdehrb9t.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ihw-4dn-s.css';
import '../../css/y/ylhmogbjb.css';
import '../../css/n/n08_2k8eh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2ta-sa5e"/><path class="np1q-ibul"/><path class="tgdehrb9t"/><g class="jn8qy4bru"><path class="ihw-4dn-s"/><path class="ylhmogbjb"/><path class="n08_2k8eh"/></g>`,
		"fallback": "openmoji:womans-sandal",
	});
}

export default Component;
