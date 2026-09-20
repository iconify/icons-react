import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k-11u7efl.css';
import '../../css/r/r2th9g7qg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k-11u7efl"/><path class="r2th9g7qg"/></g>`,
		"fallback": "streamline:yuan-circle",
	});
}

export default Component;
