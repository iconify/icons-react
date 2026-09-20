import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eyvhj0zmx.css';
import '../../css/b/bpar3ggwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eyvhj0zmx"/><path class="bpar3ggwb"/></g>`,
		"fallback": "streamline-freehand:website-development-browser-com-web",
	});
}

export default Component;
