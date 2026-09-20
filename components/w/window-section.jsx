import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2fuemo5t.css';
import '../../css/t/tvuc3h5zy.css';
import '../../css/a/amudyvb1b.css';
import '../../css/q/qv0ny4dca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2fuemo5t"/><path class="tvuc3h5zy"/><path class="amudyvb1b"/><path class="qv0ny4dca"/>`,
		"fallback": "uim:window-section",
	});
}

export default Component;
