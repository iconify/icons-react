import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eyltdky3b.css';
import '../../css/a/arwvlyb0o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="eyltdky3b"/><path class="arwvlyb0o"/></g>`,
		"fallback": "streamline-flex:wireless-fast-charging",
	});
}

export default Component;
