import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/w/w0obfdexd.css';
import '../../css/e/e2logi1tl.css';
import '../../css/v/vt298ccbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="w0obfdexd"/><path class="e2logi1tl"/><path class="vt298ccbo"/></g>`,
		"fallback": "streamline-plump:yin-yang-symbol",
	});
}

export default Component;
