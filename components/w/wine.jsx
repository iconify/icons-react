import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/twn8wbbxe.css';
import '../../css/t/tpx0dobaq.css';
import '../../css/h/hwf4h3svl.css';
import '../../css/g/gnimvwbgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="twn8wbbxe"/><path class="tpx0dobaq"/><path class="hwf4h3svl"/><path class="gnimvwbgd"/></g>`,
		"fallback": "streamline-plump-color:wine",
	});
}

export default Component;
