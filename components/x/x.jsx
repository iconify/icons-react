import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/db51_1bbb.css';
import '../../css/m/md286fbip.css';
import '../../css/d/diq9bpbfb.css';
import '../../css/j/jz9h9rb4r.css';
import '../../css/e/e4utglbqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="db51_1bbb"/><g class="md286fbip"><path class="diq9bpbfb"/><path class="jz9h9rb4r"/><path class="e4utglbqp"/></g></g>`,
		"fallback": "cryptocurrency-color:x",
	});
}

export default Component;
