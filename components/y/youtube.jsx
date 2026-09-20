import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gb9mrrbso.css';
import '../../css/e/e4j3uccqe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gb9mrrbso"/><path class="e4j3uccqe"/></g>`,
		"fallback": "streamline-flex:youtube",
	});
}

export default Component;
