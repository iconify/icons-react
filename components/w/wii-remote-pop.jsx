import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/q/qz-mjzbjx.css';
import '../../css/m/m626bcact.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path clip-rule="evenodd" class="qz-mjzbjx"/><path class="m626bcact"/></g>`,
		"fallback": "streamline-kameleon-color:wii-remote-pop",
	});
}

export default Component;
