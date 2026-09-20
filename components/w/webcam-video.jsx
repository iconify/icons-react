import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ekrevt7-o.css';
import '../../css/d/dv7ecgbmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ekrevt7-o"/><path class="dv7ecgbmy"/></g>`,
		"fallback": "streamline-plump-color:webcam-video",
	});
}

export default Component;
