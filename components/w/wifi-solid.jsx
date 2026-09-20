import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c16wjhrqn.css';
import '../../css/s/suncofbuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c16wjhrqn"/><path class="suncofbuf"/>`,
		"fallback": "streamline-plump:wifi-solid",
	});
}

export default Component;
