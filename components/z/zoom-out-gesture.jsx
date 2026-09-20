import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lois21b9k.css';
import '../../css/f/f0wtsnbgt.css';
import '../../css/u/unbzmcbnj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lois21b9k"/><path class="f0wtsnbgt"/><path class="unbzmcbnj"/></g>`,
		"fallback": "streamline-flex:zoom-out-gesture",
	});
}

export default Component;
