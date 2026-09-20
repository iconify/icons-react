import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wtfkr3h4d.css';
import '../../css/s/su74hlzav.css';
import '../../css/e/ewbqctogc.css';
import '../../css/k/kzdgzvbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wtfkr3h4d"/><path class="su74hlzav"/><path class="ewbqctogc"/><path class="kzdgzvbrf"/></g>`,
		"fallback": "streamline-plump-color:zoom-in-gesture",
	});
}

export default Component;
