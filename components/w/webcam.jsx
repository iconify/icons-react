import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/coj6xqbaw.css';
import '../../css/v/vs3afk6-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="coj6xqbaw"/><path class="vs3afk6-b"/></g>`,
		"fallback": "streamline-flex:webcam",
	});
}

export default Component;
