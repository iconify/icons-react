import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrx9jcbxx.css';
import '../../css/w/wremkicki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lrx9jcbxx"/><path class="wremkicki"/></g>`,
		"fallback": "tabler:world-flame",
	});
}

export default Component;
