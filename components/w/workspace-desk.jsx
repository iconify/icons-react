import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fmer5pbcg.css';
import '../../css/o/oxobabbok.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fmer5pbcg"/><path class="oxobabbok"/></g>`,
		"fallback": "streamline-flex:workspace-desk",
	});
}

export default Component;
