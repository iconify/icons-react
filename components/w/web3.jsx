import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv3krv5vt.css';
import '../../css/a/ab3nawxxs.css';
import '../../css/f/f42h4jbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv3krv5vt"/><path class="ab3nawxxs"/><path class="f42h4jbyz"/>`,
		"fallback": "pixel:web3",
	});
}

export default Component;
